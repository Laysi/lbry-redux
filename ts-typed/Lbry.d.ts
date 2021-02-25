import { ChannelClaim, Claim, PurchaseReceipt, StreamClaim } from './Claim';
import { Support, Transaction } from './Transaction'
import { FileListItem } from './File'

declare type StatusResponse = {
  blob_manager: {
    finished_blobs: number;
  };
  blockchain_headers: {
    download_progress: number;
    downloading_headers: boolean;
  };
  connection_status: {
    code: string;
    message: string;
  };
  dht: {
    node_id: string;
    peers_in_routing_table: number;
  };
  hash_announcer: {
    announce_queue_size: number;
  };
  installation_id: string;
  is_running: boolean;
  skipped_components: Array<string>;
  startup_status: {
    blob_manager: boolean;
    blockchain_headers: boolean;
    database: boolean;
    dht: boolean;
    exchange_rate_manager: boolean;
    hash_announcer: boolean;
    peer_protocol_server: boolean;
    stream_manager: boolean;
    upnp: boolean;
    wallet: boolean;
  };
  stream_manager: {
    managed_files: number;
  };
  upnp: {
    aioupnp_version: string;
    dht_redirect_set: boolean;
    external_ip: string;
    gateway: string;
    peer_redirect_set: boolean;
    redirects: {};
  };
  wallet: {
    best_blockhash: string;
    blocks: number;
    blocks_behind: number;
    is_encrypted: boolean;
    is_locked: boolean;
    headers_synchronization_progress: number;
    available_servers: number;
  } | null | undefined;
};

declare type VersionResponse = {
  build: string;
  lbrynet_version: string;
  os_release: string;
  os_system: string;
  platform: string;
  processor: string;
  python_version: string;
};

declare type BalanceResponse = {
  available: string;
  reserved: string;
  reserved_subtotals: {
    claims: string;
    supports: string;
    tips: string;
  } | null | undefined;
  total: string;
};

declare type ResolveResponse = {
  // Keys are the url(s) passed to resolve
  [key: string]: { error?: {}; stream?: StreamClaim; channel?: ChannelClaim; claimsInChannel?: number; };
};

declare type GetResponse = FileListItem & { error?: string; };

declare type GenericTxResponse = {
  height: number;
  hex: string;
  inputs: Array<{}>;
  outputs: Array<{}>;
  total_fee: string;
  total_input: string;
  total_output: string;
  txid: string;
};

declare type PublishResponse = GenericTxResponse & {
  // Only first value in outputs is a claim
  // That's the only value we care about
  outputs: Array<Claim>;
};

declare type ClaimSearchResponse = {
  items: Array<Claim>;
  page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
};

declare type ClaimListResponse = {
  items: Array<ChannelClaim | Claim>;
  page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
};

declare type ChannelCreateResponse = GenericTxResponse & {
  outputs: Array<ChannelClaim>;
};

declare type ChannelUpdateResponse = GenericTxResponse & {
  outputs: Array<ChannelClaim>;
};

declare type CommentCreateResponse = Comment;
declare type CommentUpdateResponse = Comment;

declare type CommentListResponse = {
  items: Array<Comment>;
  page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
};

declare type MyReactions = {
  // Keys are the commentId
  [key: string]: Array<string>;
};

declare type OthersReactions = {
  // Keys are the commentId
  [key: string]: {
    // Keys are the reaction_type, e.g. 'like'
    [key: string]: number;
  };
};

declare type CommentReactListResponse = {
  my_reactions: Array<MyReactions>;
  others_reactions: Array<OthersReactions>;
};

declare type CommentHideResponse = {
  // keyed by the CommentIds entered
  [key: string]: { hidden: boolean; };
};

declare type CommentPinResponse = {
  // keyed by the CommentIds entered
  items: Comment;
};

declare type CommentAbandonResponse = {
  // keyed by the CommentId given
  abandoned: boolean;
};

declare type ChannelListResponse = {
  items: Array<ChannelClaim>;
  page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
};

declare type ChannelSignResponse = {
  signature: string;
  signing_ts: string;
};

declare type FileListResponse = {
  items: Array<FileListItem>;
  page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
};

declare type TxListResponse = {
  items: Array<Transaction>;
  page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
};

declare type SupportListResponse = {
  items: Array<Support>;
  page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
};

declare type BlobListResponse = { items: Array<string>; };

declare type WalletListResponse = Array<{
  id: string;
  name: string;
}>;

declare type WalletStatusResponse = {
  is_encrypted: boolean;
  is_locked: boolean;
  is_syncing: boolean;
};

declare type SyncApplyResponse = {
  hash: string;
  data: string;
};

declare type SupportAbandonResponse = GenericTxResponse;

declare type StreamListResponse = {
  items: Array<StreamClaim>;
  page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
};

declare type StreamRepostOptions = {
  name: string;
  bid: string;
  claim_id: string;
  channel_id?: string;
};

declare type StreamRepostResponse = GenericTxResponse;

declare type PurchaseListResponse = {
  items: Array<PurchaseReceipt & { claim: StreamClaim; }>;
  page: number;
  page_size: number;
  total_items: number;
  total_pages: number;
};

declare type PurchaseListOptions = {
  page: number;
  page_size: number;
  resolve: boolean;
  claim_id?: string;
  channel_id?: string;
};

//
// Types used in the generic Lbry object that is exported
//
export declare type LbryTypes = {
  isConnected: boolean;
  connectPromise: Promise<any> | null | undefined;
  connect: () => void;
  daemonConnectionString: string;
  alternateConnectionString: string;
  methodsUsingAlternateConnectionString: Array<string>;
  apiRequestHeaders: {
    [key: string]: string;
  };
  setDaemonConnectionString: (value: string) => void;
  setApiHeader: (key: string, value: string) => void;
  unsetApiHeader: (key: string) => void;
  overrides: {
    [key: string]: (...args: Array<any>) => any | null | undefined;
  };
  setOverride: (methodName: string, newMethod: (...args: Array<any>) => any) => void;
  getApiRequestHeaders: () => {
    [key: string]: string;
  };
  getMediaType: (contentType: string, fileName: string | null | undefined) => string;

  // Lbry Methods
  stop: () => Promise<string>;
  status: () => Promise<StatusResponse>;
  version: () => Promise<VersionResponse>;
  /**
   * Get the claim that a URL refers to.
   * 
   * @param params Command args obj
   * @param {string[]} [params.urls] one or more urls to resolve
   * @param {string} [params.wallet_id] wallet to check for claim purchase receipts
   * @param {string} [params.new_sdk_server] URL of the new SDK server (EXPERIMENTAL)
   * @param {boolean} [params.include_purchase_receipt] lookup and include a receipt if this wallet has purchased the claim being resolved
   * @param {boolean} [params.include_is_my_output] lookup and include a boolean indicating if claim being resolved is yours
   * @param {boolean} [params.include_sent_supports] lookup and sum the total amount of supports you've made to this claim
   * @param {boolean} [params.include_sent_tips] lookup and sum the total amount of tips you've made to this claim (only makes sense when claim is not yours)
   * @param {boolean} [params.include_received_tips] lookup and sum the total amount of tips you've received to this claim (only makes sense when claim is yours)
   */
  resolve: (params: {urls?:string[],wallet_id?:string,new_sdk_server?:string,include_purchase_receipt?:boolean,include_is_my_output?:boolean,include_sent_supports?:boolean,include_sent_tips?:boolean,include_received_tips?:boolean}) => Promise<ResolveResponse>;
  /**
   * Download stream from a LBRY name.
   * 
   * @param params Command args obj
   * @param {string} [params.uri] uri of the content to download
   * @param {string} [params.file_name] specified name for the downloaded file, overrides the stream file name
   * @param {string} [params.download_directory] full path to the directory to download into
   * @param {number} [params.timeout] download timeout in number of seconds
   * @param {boolean} [params.save_file] save the file to the downloads directory
   * @param {string} [params.wallet_id] wallet to check for claim purchase receipts
   */
  get: (params: {uri?:string,file_name?:string,download_directory?:string,timeout?:number,save_file?:boolean,wallet_id?:string}) => Promise<GetResponse>;
  /**
   * Create or replace a stream claim at a given name (use 'stream create/update' for more control).
   * 
   * @param params Command args obj
   * @param {string} [params.name] name of the content (can only consist of a-z A-Z 0-9 and -(dash))
   * @param {number} [params.bid] amount to back the claim
   * @param {string} [params.file_path] path to file to be associated with name.
   * @param {boolean} [params.validate_file] validate that the video container and encodings match common web browser support or that optimization succeeds if specified. FFmpeg is required
   * @param {boolean} [params.optimize_file] transcode the video & audio if necessary to ensure common web browser support. FFmpeg is required
   * @param {string} [params.fee_currency] specify fee currency
   * @param {number} [params.fee_amount] content download fee
   * @param {string} [params.fee_address] address where to send fee payments, will use value from --claim_address if not provided
   * @param {string} [params.title] title of the publication
   * @param {string} [params.description] description of the publication
   * @param {string} [params.author] author of the publication. The usage for this field is not the same as for channels. The author field is used to credit an author who is not the publisher and is not represented by the channel. For example, a pdf file of 'The Odyssey' has an author of 'Homer' but may by published to a channel such as '@classics', or to no channel at all
   * @param {string[]} [params.tags] add content tags
   * @param {string[]} [params.languages] languages used by the channel, using RFC 5646 format, eg: for English `--languages=en` for Spanish (Spain) `--languages=es-ES` for Spanish (Mexican) `--languages=es-MX` for Chinese (Simplified) `--languages=zh-Hans` for Chinese (Traditional) `--languages=zh-Hant`
   * @param {string[]} [params.locations] locations relevant to the stream, consisting of 2 letter `country` code and a `state`, `city` and a postal `code` along with a `latitude` and `longitude`. for JSON RPC: pass a dictionary with aforementioned attributes as keys, eg: ... "locations": [{'country': 'US', 'state': 'NH'}] ... for command line: pass a colon delimited list with values in the following order: "COUNTRY:STATE:CITY:CODE:LATITUDE:LONGITUDE" making sure to include colon for blank values, for example to provide only the city: ... --locations="::Manchester" with all values set: ... --locations="US:NH:Manchester:03101:42.990605:-71.460989" optionally, you can just pass the "LATITUDE:LONGITUDE": ... --locations="42.990605:-71.460989" finally, you can also pass JSON string of dictionary on the command line as you would via JSON RPC ... --locations="{'country': 'US', 'state': 'NH'}"
   * @param {string} [params.license] publication license
   * @param {string} [params.license_url] publication license url
   * @param {string} [params.thumbnail_url] thumbnail url
   * @param {number} [params.release_time] original public release of content, seconds since UNIX epoch
   * @param {number} [params.width] image/video width, automatically calculated from media file
   * @param {number} [params.height] image/video height, automatically calculated from media file
   * @param {number} [params.duration] audio/video duration in seconds, automatically calculated
   * @param {string} [params.channel_id] claim id of the publisher channel
   * @param {string} [params.channel_name] name of publisher channel
   * @param {string} [params.channel_account_id] one or more account ids for accounts to look in for channel certificates, defaults to all accounts.
   * @param {string} [params.account_id] account to use for holding the transaction
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   * @param {string[]} [params.funding_account_ids] ids of accounts to fund this transaction
   * @param {string} [params.claim_address] address where the claim is sent to, if not specified it will be determined automatically from the account
   * @param {boolean} [params.preview] do not broadcast the transaction
   * @param {boolean} [params.blocking] wait until transaction is in mempool
   */
  publish: (params: {name:string,bid?:number,file_path?:string,validate_file?:boolean,optimize_file?:boolean,fee_currency?:string,fee_amount?:number,fee_address?:string,title?:string,description?:string,author?:string,tags?:string[],languages?:string[],locations?:string[],license?:string,license_url?:string,thumbnail_url?:string,release_time?:number,width?:number,height?:number,duration?:number,channel_id?:string,channel_name?:string,channel_account_id?:string,account_id?:string,wallet_id?:string,funding_account_ids?:string[],claim_address?:string,preview?:boolean,blocking?:boolean}) => Promise<PublishResponse>;

  /**
   * Search for stream and channel claims on the blockchain.

Arguments marked with "supports equality constraints" allow prepending the
value with an equality constraint such as '>', '>=', '<' and '<='
eg. --height=">400000" would limit results to only claims above 400k block height.
   * 
   * @param params Command args obj
   * @param {string} [params.name] claim name (normalized)
   * @param {string} [params.text] full text search
   * @param {string} [params.claim_id] full or partial claim id
   * @param {string[]} [params.claim_ids] list of full claim ids
   * @param {string} [params.txid] transaction id
   * @param {string} [params.nout] position in the transaction
   * @param {string} [params.channel] claims signed by this channel (argument is a URL which automatically gets resolved), see --channel_ids if you need to filter by multiple channels at the same time, includes claims with invalid signatures, use in conjunction with --valid_channel_signature
   * @param {string[]} [params.channel_ids] claims signed by any of these channels (arguments must be claim ids of the channels), includes claims with invalid signatures, implies --has_channel_signature, use in conjunction with --valid_channel_signature
   * @param {string[]} [params.not_channel_ids] exclude claims signed by any of these channels (arguments must be claim ids of the channels)
   * @param {boolean} [params.has_channel_signature] claims with a channel signature (valid or invalid)
   * @param {boolean} [params.valid_channel_signature] claims with a valid channel signature or no signature, use in conjunction with --has_channel_signature to only get claims with valid signatures
   * @param {boolean} [params.invalid_channel_signature] claims with invalid channel signature or no signature, use in conjunction with --has_channel_signature to only get claims with invalid signatures
   * @param {number} [params.limit_claims_per_channel] only return up to the specified number of claims per channel
   * @param {boolean} [params.is_controlling] winning claims of their respective name
   * @param {string} [params.public_key_id] only return channels having this public key id, this is the same key as used in the wallet file to map channel certificate private keys: {'public_key_id': 'private key'}
   * @param {number} [params.height] last updated block height (supports equality constraints)
   * @param {number} [params.timestamp] last updated timestamp (supports equality constraints)
   * @param {number} [params.creation_height] created at block height (supports equality constraints)
   * @param {number} [params.creation_timestamp] created at timestamp (supports equality constraints)
   * @param {number} [params.activation_height] height at which claim starts competing for name (supports equality constraints)
   * @param {number} [params.expiration_height] height at which claim will expire (supports equality constraints)
   * @param {number} [params.release_time] limit to claims self-described as having been released to the public on or after this UTC timestamp, when claim does not provide a release time the publish time is used instead (supports equality constraints)
   * @param {number} [params.amount] limit by claim value (supports equality constraints)
   * @param {number} [params.support_amount] limit by supports and tips received (supports equality constraints)
   * @param {number} [params.effective_amount] limit by total value (initial claim value plus all tips and supports received), this amount is blank until claim has reached activation height (supports equality constraints)
   * @param {number} [params.trending_group] group numbers 1 through 4 representing the trending groups of the content: 4 means content is trending globally and independently, 3 means content is not trending globally but is trending independently (locally), 2 means it is trending globally but not independently and 1 means it's not trending globally or locally (supports equality constraints)
   * @param {number} [params.trending_mixed] trending amount taken from the global or local value depending on the trending group: 4 - global value, 3 - local value, 2 - global value, 1 - local value (supports equality constraints)
   * @param {number} [params.trending_local] trending value calculated relative only to the individual contents past history (supports equality constraints)
   * @param {number} [params.trending_global] trending value calculated relative to all trending content globally (supports equality constraints)
   * @param {string} [params.reposted_claim_id] all reposts of the specified original claim id
   * @param {number} [params.reposted] claims reposted this many times (supports equality constraints)
   * @param {string} [params.claim_type] filter by 'channel', 'stream' or 'unknown'
   * @param {string[]} [params.stream_types] filter by 'video', 'image', 'document', etc
   * @param {string[]} [params.media_types] filter by 'video/mp4', 'image/png', etc
   * @param {string} [params.fee_currency] specify fee currency: LBC, BTC, USD
   * @param {number} [params.fee_amount] content download fee (supports equality constraints)
   * @param {number} [params.duration] duration of video or audio in seconds (supports equality constraints)
   * @param {string[]} [params.any_tags] find claims containing any of the tags
   * @param {string[]} [params.all_tags] find claims containing every tag
   * @param {string[]} [params.not_tags] find claims not containing any of these tags
   * @param {string[]} [params.any_languages] find claims containing any of the languages
   * @param {string[]} [params.all_languages] find claims containing every language
   * @param {string[]} [params.not_languages] find claims not containing any of these languages
   * @param {string[]} [params.any_locations] find claims containing any of the locations
   * @param {string[]} [params.all_locations] find claims containing every location
   * @param {string[]} [params.not_locations] find claims not containing any of these locations
   * @param {number} [params.page] page to return during paginating
   * @param {number} [params.page_size] number of items on page during pagination
   * @param {string[]} [params.order_by] field to order by, default is descending order, to do an ascending order prepend ^ to the field name, eg. '^amount' available fields: 'name', 'height', 'release_time', 'publish_time', 'amount', 'effective_amount', 'support_amount', 'trending_group', 'trending_mixed', 'trending_local', 'trending_global', 'activation_height'
   * @param {boolean} [params.no_totals] do not calculate the total number of pages and items in result set (significant performance boost)
   * @param {string} [params.wallet_id] wallet to check for claim purchase receipts
   * @param {boolean} [params.include_purchase_receipt] lookup and include a receipt if this wallet has purchased the claim
   * @param {boolean} [params.include_is_my_output] lookup and include a boolean indicating if claim being resolved is yours
   * @param {string} [params.new_sdk_server] URL of the new SDK server (EXPERIMENTAL)
   */
  claim_search: (params: {name?:string,text?:string,claim_id?:string,claim_ids?:string[],txid?:string,nout?:string,channel?:string,channel_ids?:string[],not_channel_ids?:string[],has_channel_signature?:boolean,valid_channel_signature?:boolean,invalid_channel_signature?:boolean,limit_claims_per_channel?:number,is_controlling?:boolean,public_key_id?:string,height?:number,timestamp?:number,creation_height?:number,creation_timestamp?:number,activation_height?:number,expiration_height?:number,release_time?:number,amount?:number,support_amount?:number,effective_amount?:number,trending_group?:number,trending_mixed?:number,trending_local?:number,trending_global?:number,reposted_claim_id?:string,reposted?:number,claim_type?:string,stream_types?:string[],media_types?:string[],fee_currency?:string,fee_amount?:number,duration?:number,any_tags?:string[],all_tags?:string[],not_tags?:string[],any_languages?:string[],all_languages?:string[],not_languages?:string[],any_locations?:string[],all_locations?:string[],not_locations?:string[],page?:number,page_size?:number,order_by?:string[],no_totals?:boolean,wallet_id?:string,include_purchase_receipt?:boolean,include_is_my_output?:boolean,new_sdk_server?:string}) => Promise<ClaimSearchResponse>;
  /**
   * List my stream and channel claims.
   * 
   * @param params Command args obj
   * @param {string[]} [params.claim_type] claim type: channel, stream, repost, collection
   * @param {string[]} [params.claim_id] claim id
   * @param {string[]} [params.channel_id] streams in this channel
   * @param {string[]} [params.name] claim name
   * @param {boolean} [params.is_spent] shows previous claim updates and abandons
   * @param {string} [params.account_id] id of the account to query
   * @param {string} [params.wallet_id] restrict results to specific wallet
   * @param {number} [params.page] page to return during paginating
   * @param {number} [params.page_size] number of items on page during pagination
   * @param {boolean} [params.resolve] resolves each claim to provide additional metadata
   * @param {string} [params.order_by] field to order by: 'name', 'height', 'amount'
   * @param {boolean} [params.no_totals] do not calculate the total number of pages and items in result set (significant performance boost)
   * @param {boolean} [params.include_received_tips] calculate the amount of tips received for claim outputs
   */
  claim_list: (params: {claim_type?:string[],claim_id?:string[],channel_id?:string[],name?:string[],is_spent?:boolean,account_id?:string,wallet_id?:string,page?:number,page_size?:number,resolve?:boolean,order_by?:string,no_totals?:boolean,include_received_tips?:boolean}) => Promise<ClaimListResponse>;
  /**
   * Create a new channel by generating a channel private key and establishing an '@' prefixed claim.
   * 
   * @param params Command args obj
   * @param {string} [params.name] name of the channel prefixed with '@'
   * @param {number} [params.bid] amount to back the claim
   * @param {boolean} [params.allow_duplicate_name] create new channel even if one already exists with given name. default: false.
   * @param {string} [params.title] title of the publication
   * @param {string} [params.description] description of the publication
   * @param {string} [params.email] email of channel owner
   * @param {string} [params.website_url] website url
   * @param {string[]} [params.featured] claim_ids of featured content in channel
   * @param {string[]} [params.tags] content tags
   * @param {string[]} [params.languages] languages used by the channel, using RFC 5646 format, eg: for English `--languages=en` for Spanish (Spain) `--languages=es-ES` for Spanish (Mexican) `--languages=es-MX` for Chinese (Simplified) `--languages=zh-Hans` for Chinese (Traditional) `--languages=zh-Hant`
   * @param {string[]} [params.locations] locations of the channel, consisting of 2 letter `country` code and a `state`, `city` and a postal `code` along with a `latitude` and `longitude`. for JSON RPC: pass a dictionary with aforementioned attributes as keys, eg: ... "locations": [{'country': 'US', 'state': 'NH'}] ... for command line: pass a colon delimited list with values in the following order: "COUNTRY:STATE:CITY:CODE:LATITUDE:LONGITUDE" making sure to include colon for blank values, for example to provide only the city: ... --locations="::Manchester" with all values set: ... --locations="US:NH:Manchester:03101:42.990605:-71.460989" optionally, you can just pass the "LATITUDE:LONGITUDE": ... --locations="42.990605:-71.460989" finally, you can also pass JSON string of dictionary on the command line as you would via JSON RPC ... --locations="{'country': 'US', 'state': 'NH'}"
   * @param {string} [params.thumbnail_url] thumbnail url
   * @param {string} [params.cover_url] url of cover image
   * @param {string} [params.account_id] account to use for holding the transaction
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   * @param {string[]} [params.funding_account_ids] ids of accounts to fund this transaction
   * @param {string} [params.claim_address] address where the channel is sent to, if not specified it will be determined automatically from the account
   * @param {boolean} [params.preview] do not broadcast the transaction
   * @param {boolean} [params.blocking] wait until transaction is in mempool
   */
  channel_create: (params: {name:string,bid:number,allow_duplicate_name?:boolean,title?:string,description?:string,email?:string,website_url?:string,featured?:string[],tags?:string[],languages?:string[],locations?:string[],thumbnail_url?:string,cover_url?:string,account_id?:string,wallet_id?:string,funding_account_ids?:string[],claim_address?:string,preview?:boolean,blocking?:boolean}) => Promise<ChannelCreateResponse>;
  /**
   * Update an existing channel claim.
   * 
   * @param params Command args obj
   * @param {string} [params.claim_id] claim_id of the channel to update
   * @param {number} [params.bid] amount to back the claim
   * @param {string} [params.title] title of the publication
   * @param {string} [params.description] description of the publication
   * @param {string} [params.email] email of channel owner
   * @param {string} [params.website_url] website url
   * @param {string[]} [params.featured] claim_ids of featured content in channel
   * @param {boolean} [params.clear_featured] clear existing featured content (prior to adding new ones)
   * @param {string[]} [params.tags] add content tags
   * @param {boolean} [params.clear_tags] clear existing tags (prior to adding new ones)
   * @param {string[]} [params.languages] languages used by the channel, using RFC 5646 format, eg: for English `--languages=en` for Spanish (Spain) `--languages=es-ES` for Spanish (Mexican) `--languages=es-MX` for Chinese (Simplified) `--languages=zh-Hans` for Chinese (Traditional) `--languages=zh-Hant`
   * @param {boolean} [params.clear_languages] clear existing languages (prior to adding new ones)
   * @param {string[]} [params.locations] locations of the channel, consisting of 2 letter `country` code and a `state`, `city` and a postal `code` along with a `latitude` and `longitude`. for JSON RPC: pass a dictionary with aforementioned attributes as keys, eg: ... "locations": [{'country': 'US', 'state': 'NH'}] ... for command line: pass a colon delimited list with values in the following order: "COUNTRY:STATE:CITY:CODE:LATITUDE:LONGITUDE" making sure to include colon for blank values, for example to provide only the city: ... --locations="::Manchester" with all values set: ... --locations="US:NH:Manchester:03101:42.990605:-71.460989" optionally, you can just pass the "LATITUDE:LONGITUDE": ... --locations="42.990605:-71.460989" finally, you can also pass JSON string of dictionary on the command line as you would via JSON RPC ... --locations="{'country': 'US', 'state': 'NH'}"
   * @param {boolean} [params.clear_locations] clear existing locations (prior to adding new ones)
   * @param {string} [params.thumbnail_url] thumbnail url
   * @param {string} [params.cover_url] url of cover image
   * @param {string} [params.account_id] account in which to look for channel (default: all)
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   * @param {string[]} [params.funding_account_ids] ids of accounts to fund this transaction
   * @param {string} [params.claim_address] address where the channel is sent
   * @param {boolean} [params.new_signing_key] generate a new signing key, will invalidate all previous publishes
   * @param {boolean} [params.preview] do not broadcast the transaction
   * @param {boolean} [params.blocking] wait until transaction is in mempool
   * @param {boolean} [params.replace] instead of modifying specific values on the channel, this will clear all existing values and only save passed in values, useful for form submissions where all values are always set
   */
  channel_update: (params: {claim_id:string,bid?:number,title?:string,description?:string,email?:string,website_url?:string,featured?:string[],clear_featured?:boolean,tags?:string[],clear_tags?:boolean,languages?:string[],clear_languages?:boolean,locations?:string[],clear_locations?:boolean,thumbnail_url?:string,cover_url?:string,account_id?:string,wallet_id?:string,funding_account_ids?:string[],claim_address?:string,new_signing_key?:boolean,preview?:boolean,blocking?:boolean,replace?:boolean}) => Promise<ChannelUpdateResponse>;
  /**
   * Import serialized channel private key (to allow signing new streams to the channel)
   * 
   * @param params Command args obj
   * @param {string} [params.channel_data] serialized channel, as exported by channel export
   * @param {string} [params.wallet_id] import into specific wallet
   */
  channel_import: (params: {channel_data:string,wallet_id?:string}) => Promise<string>;
  /**
   * List my channel claims.
   * 
   * @param params Command args obj
   * @param {string[]} [params.name] channel name
   * @param {string[]} [params.claim_id] channel id
   * @param {boolean} [params.is_spent] shows previous channel updates and abandons
   * @param {string} [params.account_id] id of the account to use
   * @param {string} [params.wallet_id] restrict results to specific wallet
   * @param {number} [params.page] page to return during paginating
   * @param {number} [params.page_size] number of items on page during pagination
   * @param {boolean} [params.resolve] resolves each channel to provide additional metadata
   * @param {boolean} [params.no_totals] do not calculate the total number of pages and items in result set (significant performance boost)
   */
  channel_list: (params: {name?:string[],claim_id?:string[],is_spent?:boolean,account_id?:string,wallet_id?:string,page?:number,page_size?:number,resolve?:boolean,no_totals?:boolean}) => Promise<ChannelListResponse>;
  /**
   * Signs data using the specified channel signing key.
   * 
   * @param params Command args obj
   * @param {string} [params.channel_name] name of channel used to sign (or use channel id)
   * @param {string} [params.channel_id] claim id of channel used to sign (or use channel name)
   * @param {string} [params.hexdata] data to sign, encoded as hexadecimal
   * @param {string} [params.channel_account_id] one or more account ids for accounts to look in for channel certificates, defaults to all accounts.
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   */
  channel_sign: (params: {channel_name?:string,channel_id?:string,hexdata?:string,channel_account_id?:string,wallet_id?:string}) => Promise<ChannelSignResponse>;
  /**
   * Abandon one of my stream claims.
   * 
   * @param params Command args obj
   * @param {string} [params.claim_id] claim_id of the claim to abandon
   * @param {string} [params.txid] txid of the claim to abandon
   * @param {number} [params.nout] nout of the claim to abandon
   * @param {string} [params.account_id] id of the account to use
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   * @param {boolean} [params.preview] do not broadcast the transaction
   * @param {boolean} [params.blocking] wait until abandon is in mempool
   */
  stream_abandon: (params: {claim_id?:string,txid?:string,nout?:number,account_id?:string,wallet_id?:string,preview?:boolean,blocking?:boolean}) => Promise<GenericTxResponse>;
  /**
   * List my stream claims.
   * 
   * @param params Command args obj
   * @param {string[]} [params.name] stream name
   * @param {string[]} [params.claim_id] stream id
   * @param {boolean} [params.is_spent] shows previous stream updates and abandons
   * @param {string} [params.account_id] id of the account to query
   * @param {string} [params.wallet_id] restrict results to specific wallet
   * @param {number} [params.page] page to return during paginating
   * @param {number} [params.page_size] number of items on page during pagination
   * @param {boolean} [params.resolve] resolves each stream to provide additional metadata
   * @param {boolean} [params.no_totals] do not calculate the total number of pages and items in result set (significant performance boost)
   */
  stream_list: (params: {name?:string[],claim_id?:string[],is_spent?:boolean,account_id?:string,wallet_id?:string,page?:number,page_size?:number,resolve?:boolean,no_totals?:boolean}) => Promise<StreamListResponse>;
  /**
   * Abandon one of my channel claims.
   * 
   * @param params Command args obj
   * @param {string} [params.claim_id] claim_id of the claim to abandon
   * @param {string} [params.txid] txid of the claim to abandon
   * @param {number} [params.nout] nout of the claim to abandon
   * @param {string} [params.account_id] id of the account to use
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   * @param {boolean} [params.preview] do not broadcast the transaction
   * @param {boolean} [params.blocking] wait until abandon is in mempool
   */
  channel_abandon: (params: {claim_id?:string,txid?:string,nout?:number,account_id?:string,wallet_id?:string,preview?:boolean,blocking?:boolean}) => Promise<GenericTxResponse>;
  /**
   * Create a support or a tip for name claim.
   * 
   * @param params Command args obj
   * @param {string} [params.claim_id] claim_id of the claim to support
   * @param {number} [params.amount] amount of support
   * @param {boolean} [params.tip] send support to claim owner, default: false.
   * @param {string} [params.channel_id] claim id of the supporters identity channel
   * @param {string} [params.channel_name] name of the supporters identity channel
   * @param {string} [params.channel_account_id] one or more account ids for accounts to look in for channel certificates, defaults to all accounts.
   * @param {string} [params.account_id] account to use for holding the transaction
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   * @param {string[]} [params.funding_account_ids] ids of accounts to fund this transaction
   * @param {boolean} [params.preview] do not broadcast the transaction
   * @param {boolean} [params.blocking] wait until transaction is in mempool
   */
  support_create: (params: {claim_id:string,amount:number,tip?:boolean,channel_id?:string,channel_name?:string,channel_account_id?:string,account_id?:string,wallet_id?:string,funding_account_ids?:string[],preview?:boolean,blocking?:boolean}) => Promise<GenericTxResponse>;
  /**
   * List staked supports and sent/received tips.
   * 
   * @param params Command args obj
   * @param {string[]} [params.name] claim name
   * @param {string[]} [params.claim_id] claim id
   * @param {boolean} [params.received] only show received (tips)
   * @param {boolean} [params.sent] only show sent (tips)
   * @param {boolean} [params.staked] only show my staked supports
   * @param {boolean} [params.is_spent] show abandoned supports
   * @param {string} [params.account_id] id of the account to query
   * @param {string} [params.wallet_id] restrict results to specific wallet
   * @param {number} [params.page] page to return during paginating
   * @param {number} [params.page_size] number of items on page during pagination
   * @param {boolean} [params.no_totals] do not calculate the total number of pages and items in result set (significant performance boost)
   */
  support_list: (params: {name?:string[],claim_id?:string[],received?:boolean,sent?:boolean,staked?:boolean,is_spent?:boolean,account_id?:string,wallet_id?:string,page?:number,page_size?:number,no_totals?:boolean}) => Promise<SupportListResponse>;
  /**
   * Abandon supports, including tips, of a specific claim, optionally
keeping some amount as supports.
   * 
   * @param params Command args obj
   * @param {string} [params.claim_id] claim_id of the support to abandon
   * @param {string} [params.txid] txid of the claim to abandon
   * @param {number} [params.nout] nout of the claim to abandon
   * @param {number} [params.keep] amount of lbc to keep as support
   * @param {string} [params.account_id] id of the account to use
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   * @param {boolean} [params.preview] do not broadcast the transaction
   * @param {boolean} [params.blocking] wait until abandon is in mempool
   */
  support_abandon: (params: {claim_id?:string,txid?:string,nout?:number,keep?:number,account_id?:string,wallet_id?:string,preview?:boolean,blocking?:boolean}) => Promise<SupportAbandonResponse>;
  stream_repost: (params: StreamRepostOptions) => Promise<StreamRepostResponse>;
  purchase_list: (params: PurchaseListOptions) => Promise<PurchaseListResponse>;

  // File fetching and manipulation
  /**
   * List files limited by optional filters
   * 
   * @param params Command args obj
   * @param {string} [params.sd_hash] get file with matching sd hash
   * @param {string} [params.file_name] get file with matching file name in the downloads folder
   * @param {string} [params.stream_hash] get file with matching stream hash
   * @param {number} [params.rowid] get file with matching row id
   * @param {number} [params.added_on] get file with matching time of insertion
   * @param {string} [params.claim_id] get file with matching claim id(s)
   * @param {string} [params.outpoint] get file with matching claim outpoint(s)
   * @param {string} [params.txid] get file with matching claim txid
   * @param {number} [params.nout] get file with matching claim nout
   * @param {string} [params.channel_claim_id] get file with matching channel claim id(s)
   * @param {string} [params.channel_name] get file with matching channel name
   * @param {string} [params.claim_name] get file with matching claim name
   * @param {number} [params.blobs_in_stream] get file with matching blobs in stream
   * @param {string} [params.download_path] get file with matching download path
   * @param {boolean} [params.uploading_to_reflector] get files currently uploading to reflector
   * @param {boolean} [params.is_fully_reflected] get files that have been uploaded to reflector
   * @param {string} [params.status] match by status, ( running | finished | stopped )
   * @param {boolean} [params.completed] match only completed
   * @param {number} [params.blobs_remaining] amount of remaining blobs to download
   * @param {string} [params.sort] field to sort by (one of the above filter fields)
   * @param {string} [params.comparison] logical comparison, (eq | ne | g | ge | l | le | in)
   * @param {number} [params.page] page to return during paginating
   * @param {number} [params.page_size] number of items on page during pagination
   * @param {string} [params.wallet_id] add purchase receipts from this wallet
   */
  file_list: (params: {sd_hash?:string,file_name?:string,stream_hash?:string,rowid?:number,added_on?:number,claim_id?:string,outpoint?:string,txid?:string,nout?:number,channel_claim_id?:string,channel_name?:string,claim_name?:string,blobs_in_stream?:number,download_path?:string,uploading_to_reflector?:boolean,is_fully_reflected?:boolean,status?:string,completed?:boolean,blobs_remaining?:number,sort?:string,comparison?:string,page?:number,page_size?:number,wallet_id?:string}) => Promise<FileListResponse>;
  /**
   * Delete a LBRY file
   * 
   * @param params Command args obj
   * @param {boolean} [params.delete_from_download_dir] delete file from download directory, instead of just deleting blobs
   * @param {boolean} [params.delete_all] if there are multiple matching files, allow the deletion of multiple files. Otherwise do not delete anything.
   * @param {string} [params.sd_hash] delete by file sd hash
   * @param {string} [params.file_name] delete by file name in downloads folder
   * @param {string} [params.stream_hash] delete by file stream hash
   * @param {number} [params.rowid] delete by file row id
   * @param {string} [params.claim_id] delete by file claim id
   * @param {string} [params.txid] delete by file claim txid
   * @param {number} [params.nout] delete by file claim nout
   * @param {string} [params.claim_name] delete by file claim name
   * @param {string} [params.channel_claim_id] delete by file channel claim id
   * @param {string} [params.channel_name] delete by file channel claim name
   */
  file_delete: (params: {delete_from_download_dir?:boolean,delete_all?:boolean,sd_hash?:string,file_name?:string,stream_hash?:string,rowid?:number,claim_id?:string,txid?:string,nout?:number,claim_name?:string,channel_claim_id?:string,channel_name?:string}) => Promise<boolean>;
  //TODO: track down this method in api docs make sure the response type correct
  /**
   * Start or stop downloading a file
   * 
   * @param params Command args obj
   * @param {string} [params.status] one of "start" or "stop"
   * @param {string} [params.sd_hash] set status of file with matching sd hash
   * @param {string} [params.file_name] set status of file with matching file name in the downloads folder
   * @param {string} [params.stream_hash] set status of file with matching stream hash
   * @param {number} [params.rowid] set status of file with matching row id
   */
  file_set_status: (params: {status:string,sd_hash?:string,file_name?:string,stream_hash?:string,rowid?:number}) => Promise<string>; 
  /**
   * Delete a blob
   * 
   * @param params Command args obj
   * @param {string} [params.blob_hash] blob hash of the blob to delete
   */
  blob_delete: (params: {blob_hash:string}) => Promise<string>;
  /**
   * Returns blob hashes. If not given filters, returns all blobs known by the blob manager
   * 
   * @param params Command args obj
   * @param {boolean} [params.needed] only return needed blobs
   * @param {boolean} [params.finished] only return finished blobs
   * @param {string} [params.uri] filter blobs by stream in a uri
   * @param {string} [params.stream_hash] filter blobs by stream hash
   * @param {string} [params.sd_hash] filter blobs by sd hash
   * @param {number} [params.page] page to return during paginating
   * @param {number} [params.page_size] number of items on page during pagination
   */
  blob_list: (params: {needed?:boolean,finished?:boolean,uri?:string,stream_hash?:string,sd_hash?:string,page?:number,page_size?:number}) => Promise<BlobListResponse>;

  // Preferences
  /**
   * Get preference value for key or all values if not key is passed in.
   * 
   * @param params Command args obj
   * @param {string} [params.key] key associated with value
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   */
  preference_get: (params: {key?:string,wallet_id?:string}) => Promise<any>;
  /**
   * Set preferences
   * 
   * @param params Command args obj
   * @param {string} [params.key] key associated with value
   * @param {string} [params.value] key associated with value
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   */
  preference_set: (params: {key:string,value:string,wallet_id?:string}) => Promise<any>;

  // Commenting
  /**
   * List comments associated with a claim.
   * 
   * @param params Command args obj
   * @param {string} [params.claim_id] The claim on which the comment will be made on
   * @param {string} [params.parent_id] CommentId of a specific thread you'd like to see
   * @param {number} [params.page] The page you'd like to see in the comment list.
   * @param {number} [params.page_size] The amount of comments that you'd like to retrieve
   * @param {boolean} [params.skip_validation] Skip resolving comments to validate channel names
   * @param {boolean} [params.include_replies] Whether or not you want to include replies in list
   * @param {boolean} [params.is_channel_signature_valid] Only include comments with valid signatures. [Warning: Paginated total size will not change, even if list reduces]
   * @param {boolean} [params.visible] Select only Visible Comments
   * @param {boolean} [params.hidden] Select only Hidden Comments
   */
  comment_list: (params: {claim_id:string,parent_id?:string,page?:number,page_size?:number,skip_validation?:boolean,include_replies?:boolean,is_channel_signature_valid?:boolean,visible?:boolean,hidden?:boolean}) => Promise<CommentListResponse>;
  /**
   * Create and associate a comment with a claim using your channel identity.
   * 
   * @param params Command args obj
   * @param {string} [params.comment] Comment to be made, should be at most 2000 characters.
   * @param {string} [params.claim_id] The ID of the claim to comment on
   * @param {string} [params.parent_id] The ID of a comment to make a response to
   * @param {string} [params.channel_id] The ID of the channel you want to post under
   * @param {string} [params.channel_name] The channel you want to post as, prepend with a '@'
   * @param {string} [params.channel_account_id] one or more account ids for accounts to look in for channel certificates, defaults to all accounts
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   */
  comment_create: (params: {comment:string,claim_id:string,parent_id?:string,channel_id?:string,channel_name?:string,channel_account_id?:string,wallet_id?:string}) => Promise<CommentCreateResponse>;
  /**
   * Edit a comment published as one of your channels.
   * 
   * @param params Command args obj
   * @param {string} [params.comment] New comment replacing the old one
   * @param {string} [params.comment_id] Hash identifying the comment to edit
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   */
  comment_update: (params: {comment:string,comment_id:string,wallet_id?:string}) => Promise<CommentUpdateResponse>;
  /**
   * Hide a comment published to a claim you control.
   * 
   * @param params Command args obj
   * @param {string[]} [params.comment_ids] one or more comment_id to hide.
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   */
  comment_hide: (params: {comment_ids?:string[],wallet_id?:string}) => Promise<CommentHideResponse>;
  /**
   * Abandon a comment published under your channel identity.
   * 
   * @param params Command args obj
   * @param {string} [params.comment_id] The ID of the comment to be abandoned.
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   */
  comment_abandon: (params: {comment_id:string,wallet_id?:string}) => Promise<CommentAbandonResponse>;

  // Wallet utilities
  /**
   * Return the balance of a wallet
   * 
   * @param params Command args obj
   * @param {string} [params.wallet_id] balance for specific wallet
   * @param {number} [params.confirmations] Only include transactions with this many confirmed blocks.
   */
  wallet_balance: (params: {wallet_id?:string,confirmations?:number}) => Promise<BalanceResponse>;
  /**
   * Decrypt an encrypted wallet, this will remove the wallet password. The wallet must be unlocked to decrypt it
   * 
   * @param params Command args obj
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   */
  wallet_decrypt: (params: {wallet_id?:string}) => Promise<boolean>;
  /**
   * Encrypt an unencrypted wallet with a password
   * 
   * @param params Command args obj
   * @param {string} [params.new_password] password to encrypt account
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   */
  wallet_encrypt: (params: {new_password:string,wallet_id?:string}) => Promise<boolean>;
  /**
   * Unlock an encrypted wallet
   * 
   * @param params Command args obj
   * @param {string} [params.password] password to use for unlocking
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   */
  wallet_unlock: (params: {password:string,wallet_id?:string}) => Promise<boolean>;
  /**
   * List wallets.
   * 
   * @param params Command args obj
   * @param {string} [params.wallet_id] show specific wallet only
   * @param {number} [params.page] page to return during paginating
   * @param {number} [params.page_size] number of items on page during pagination
   */
  wallet_list: (params: {wallet_id?:string,page?:number,page_size?:number}) => Promise<WalletListResponse>;
  /**
   * Send the same number of credits to multiple addresses using all accounts in wallet to
fund the transaction and the default account to receive any change.
   * 
   * @param params Command args obj
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   * @param {string} [params.change_account_id] account where change will go
   * @param {string} [params.funding_account_ids] accounts to fund the transaction
   * @param {boolean} [params.preview] do not broadcast the transaction
   * @param {boolean} [params.blocking] wait until tx has synced
   */
  wallet_send: (params: {wallet_id?:string,change_account_id?:string,funding_account_ids?:string,preview?:boolean,blocking?:boolean}) => Promise<GenericTxResponse>;
  /**
   * Status of wallet including encryption/lock state.
   * 
   * @param params Command args obj
   * @param {string} [params.wallet_id] status of specific wallet
   */
  wallet_status: (params: {wallet_id?:string}) => Promise<WalletStatusResponse>;
  /**
   * Checks if an address is associated with the current wallet.
   * 
   * @param params Command args obj
   * @param {string} [params.address] address to check
   * @param {string} [params.account_id] id of the account to use
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   */
  address_is_mine: (params: {address:string,account_id?:string,wallet_id?:string}) => Promise<boolean>;
  /**
   * Return an address containing no balance, will create
a new address if there is none.
   * 
   * @param params Command args obj
   * @param {string} [params.account_id] id of the account to use
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   */
  address_unused: (params: {account_id?:string,wallet_id?:string}) => Promise<string>; // New address
  /**
   * List account addresses or details of single address.
   * 
   * @param params Command args obj
   * @param {string} [params.address] just show details for single address
   * @param {string} [params.account_id] id of the account to use
   * @param {string} [params.wallet_id] restrict operation to specific wallet
   * @param {number} [params.page] page to return during paginating
   * @param {number} [params.page_size] number of items on page during pagination
   */
  address_list: (params: {address?:string,account_id?:string,wallet_id?:string,page?:number,page_size?:number}) => Promise<string>;
  /**
   * List transactions belonging to wallet
   * 
   * @param params Command args obj
   * @param {string} [params.account_id] id of the account to query
   * @param {string} [params.wallet_id] restrict results to specific wallet
   * @param {number} [params.page] page to return during paginating
   * @param {number} [params.page_size] number of items on page during pagination
   */
  transaction_list: (params: {account_id?:string,wallet_id?:string,page?:number,page_size?:number}) => Promise<TxListResponse>;

  // Sync
  /**
   * Deterministic hash of the wallet.
   * 
   * @param params Command args obj
   * @param {string} [params.wallet_id] wallet for which to generate hash
   */
  sync_hash: (params: {wallet_id?:string}) => Promise<string>;
  /**
   * Apply incoming synchronization data, if provided, and return a sync hash and update wallet data.

Wallet must be unlocked to perform this operation.

If "encrypt-on-disk" preference is True and supplied password is different from local password,
or there is no local password (because local wallet was not encrypted), then the supplied password
will be used for local encryption (overwriting previous local encryption password).
   * 
   * @param params Command args obj
   * @param {string} [params.password] password to decrypt incoming and encrypt outgoing data
   * @param {string} [params.data] incoming sync data, if any
   * @param {string} [params.wallet_id] wallet being sync'ed
   * @param {boolean} [params.blocking] wait until any new accounts have sync'ed
   */
  sync_apply: (params: {password?:string,data?:string,wallet_id?:string,blocking?:boolean}) => Promise<SyncApplyResponse>;

  // The app shouldn't need to do this
  utxo_release: () => Promise<any>;
};


export function apiCall(method: string, params: {} | null | undefined, resolve: (...args: Array<any>) => any, reject: (...args: Array<any>) => any);