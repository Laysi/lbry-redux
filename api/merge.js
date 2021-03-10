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
        description:a.description,
        supportsEqualityConstraints: a.description.indexOf('(supports equality constraints)')  > 0
    }));

}

function generateType(args) {
    let typeList = typeTranslate(args).map(a => `${a.name}${a.required ? '' : '?'}:${a.type}`);
    return `{${typeList.join(',')}}`;

}

let lbryTypeDts = [];
let lbryParamsTypeDts = [];
let inLbryTypeContent = false;
for (let line of sourceDTS) {
    if(!inLbryTypeContent && line == 'export declare type LbryTypes = {'){
        inLbryTypeContent = true;
    }
    
    if(!inLbryTypeContent && lbryTypeDts.length >0){
        dstDTS = [...dstDTS,...lbryParamsTypeDts,...lbryTypeDts]
        lbryTypeDts = [];
        lbryParamsTypeDts = [];
    }

    if (inLbryTypeContent) {
        if(regexTarget.test(line)){
            let [_, command, responseType,tailStuff] = line.match(regexTarget)
            let apiData = getApiCommand(command);
            let paramsTypeName = apiData.name.split('_').map(s=>s.charAt(0).toUpperCase() + s.slice(1)).join('')+'Params';
    
    
            if (apiData !== undefined) {
                // lbryParamsTypeDts.push(`/**`);
                // for (let arg of typeTranslate(apiData.arguments)) {
                //     lbryParamsTypeDts.push(`   * @property  {${arg.type}} ${arg.require?'':'['}${arg.name}${arg.require?'':']'} ${arg.description}`);
                // }
                // lbryParamsTypeDts.push(` */`);
                lbryParamsTypeDts.push(`/**`);
                lbryParamsTypeDts.push(` * the params object of api command {${apiData.name}}`);
                lbryParamsTypeDts.push(` * @see LbryTypes.${apiData.name}()`);
                lbryParamsTypeDts.push(` */`);
                lbryParamsTypeDts.push(`export interface ${paramsTypeName} {`);
                for(let arg of  typeTranslate(apiData.arguments)){
                    lbryParamsTypeDts.push(`  /** ${arg.description} */`);
                    // lbryParamsTypeDts.push(`   * ${arg.description}`);
                    // lbryParamsTypeDts.push(`   */`);
                    lbryParamsTypeDts.push(`  ${arg.name}${arg.required ? '' : '?'}: ${arg.type} ${arg.supportsEqualityConstraints ? '| EqualityConstraintsNumber':''}`);
                }
                lbryParamsTypeDts.push(`}`);


                lbryTypeDts.push(`  /**`);
                lbryTypeDts.push(`   * ${apiData.description}`);
                lbryTypeDts.push(`   * `);
                lbryTypeDts.push(`   * @see {${paramsTypeName}}`);
                lbryTypeDts.push(`   * @param {${paramsTypeName}} params Command args obj`);
                for (let arg of typeTranslate(apiData.arguments)) {
                    lbryTypeDts.push(`   * @param {${arg.type}} ${arg.require?'':'['}params.${arg.name}${arg.require?'':']'} ${arg.description}`);
                }
                lbryTypeDts.push(`   */`);
                lbryTypeDts.push(`  ${command}(params: ${paramsTypeName}): Promise<${responseType}>;${tailStuff}`);
            } else {
                lbryTypeDts.push(line);
            }
        }else{
            lbryTypeDts.push(line);

        }
        

    } else {
        dstDTS.push(line);
    }
    if(line == '};' && inLbryTypeContent){
        inLbryTypeContent = false;
    }
    // console.log(line)
}
// console.dir(dstDTS, {'maxArrayLength': null});
let dstContent = dstDTS.join('\n');

fs.writeFileSync('./ts-typed/Lbry.d.ts', dstContent)


//