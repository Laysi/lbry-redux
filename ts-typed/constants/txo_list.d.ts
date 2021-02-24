declare namespace TXO_LIST {
    const ACTIVE = 'active'; // spent, active, all
    const TYPE = 'type'; // all, payment, support, channel, stream, repost
    const SUB_TYPE = 'subtype'; // other, purchase, tip
    const PAGE_SIZE = 'page_size';
    const PAGE = 'page';
    const ALL = 'all';
    // dropdown types
    const SENT = 'sent';
    const RECEIVED = 'received';
    const SUPPORT = 'support';
    const CHANNEL = 'channel';
    const PUBLISH = 'publish';
    const REPOST = 'repost';
    const DROPDOWN_TYPES = [ALL, SENT, RECEIVED, SUPPORT, CHANNEL, PUBLISH, REPOST];
    // dropdown subtypes
    const TIP = 'tip';
    const PURCHASE = 'purchase';
    const PAYMENT = 'payment';
    const DROPDOWN_SUBTYPES = [ALL, TIP, PURCHASE, PAYMENT];

    // rpc params
    const TX_TYPE = 'type'; // = other, stream, repost, channel, support, purchase
    const IS_SPENT = 'is_spent';
    const IS_NOT_SPENT = 'is_not_spent';
    const IS_MY_INPUT = 'is_my_input';
    const IS_MY_OUTPUT = 'is_my_output';
    const IS_NOT_MY_INPUT = 'is_not_my_input';
    const IS_NOT_MY_OUTPUT = 'is_not_my_output'; // use to further distinguish payments to self / from self.
    const IS_MY_INPUT_OR_OUTPUT = 'is_my_input_or_output';
    const EXCLUDE_INTERNAL_TRANSFERS = 'exclude_internal_transfers';

    // sdk unique types
    const OTHER = 'other';
    const STREAM = 'stream';

    const PAGE_SIZE_DEFAULT = 20;
}