'use strict';

const fs = require('fs');
const { type } = require('os');
const api = JSON.parse(fs.readFileSync('./api/api.json'));
const sourceDTS = fs.readFileSync('./api/Lbry.d.ts').toString().split('\n');
let dstDTS = [];

let regexTarget = /^\s*(\w+):\s\((?:params|prams):\s\{\}\) => Promise<(\w+)>;(.*)$/;


function getApiCommand(command) {
    for (let category in api) {
        let data = api[category].commands.find(c => c.name == command);
        if (data !== undefined) {
            return data
        }
    }
    return undefined;
}

let typeMap = {
    'str': 'string',
    'string': 'string',
    'bool': 'boolean',
    'int': 'number',
    'decimal': 'number',
    'list': 'string[]'
}
function typeMapping(t) {
    let types = t.split(',');
    if (types.length == 2) {
        if (types[1].trim() === 'list')
            return `${typeMap[types[0].trim()]}[]`
    } else if (types.length == 1) {
        if (t.search('list') > 0) {
            return typeMap['list']
        }
        return typeMap[t];
    }
    throw new Error('unknown type string')
}


function typeTranslate(args) {
    return args.map(a => ({
        name: a.name.replace(/<\w+>/, ''),
        required: a.is_required,
        type: typeMapping(a.type),
        description:a.description
    }));

}

function generateType(args) {
    let typeList = typeTranslate(args).map(a => `${a.name}${a.required ? '' : '?'}:${a.type}`);
    return `{${typeList.join(',')}}`;

}
/**
 * 
 * 
 * 
 */

for (let line of sourceDTS) {
    if (regexTarget.test(line)) {
        let [_, command, responseType,tailStuff] = line.match(regexTarget)
        let apiData = getApiCommand(command);
        if (apiData !== undefined) {
            dstDTS.push(`  /**`);
            dstDTS.push(`   * ${apiData.description}`);
            dstDTS.push(`   * `);
            dstDTS.push(`   * @param params Command args obj`);
            for (let arg of typeTranslate(apiData.arguments)) {
                dstDTS.push(`   * @param {${arg.type}} ${arg.require?'':'['}params.${arg.name}${arg.require?'':']'} ${arg.description}`);
            }
            dstDTS.push(`   */`);
            dstDTS.push(`  ${command}: (params: ${generateType(apiData.arguments)}) => Promise<${responseType}>;${tailStuff}`);
        } else {
            dstDTS.push(line);
        }

    } else {
        dstDTS.push(line);
    }
    // console.log(line)
}
// console.dir(dstDTS, {'maxArrayLength': null});
let dstContent = dstDTS.join('\n');

fs.writeFileSync('./ts-typed/Lbry.d.ts', dstContent)


//