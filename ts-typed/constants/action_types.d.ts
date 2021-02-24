declare namespace ACTIONS {
    const WINDOW_FOCUSED = 'WINDOW_FOCUSED';
    const DAEMON_READY = 'DAEMON_READY';
    const DAEMON_VERSION_MATCH = 'DAEMON_VERSION_MATCH';
    const DAEMON_VERSION_MISMATCH = 'DAEMON_VERSION_MISMATCH';
    const VOLUME_CHANGED = 'VOLUME_CHANGED';
    const SET_WELCOME_VERSION = 'SET_WELCOME_VERSION';
    const SET_ALLOW_ANALYTICS = 'SET_ALLOW_ANALYTICS';
    
    // Navigation
    const CHANGE_AFTER_AUTH_PATH = 'CHANGE_AFTER_AUTH_PATH';
    const WINDOW_SCROLLED = 'WINDOW_SCROLLED';
    const HISTORY_NAVIGATE = 'HISTORY_NAVIGATE';
    
    // Upgrades
    const UPGRADE_CANCELLED = 'UPGRADE_CANCELLED';
    const DOWNLOAD_UPGRADE = 'DOWNLOAD_UPGRADE';
    const UPGRADE_DOWNLOAD_STARTED = 'UPGRADE_DOWNLOAD_STARTED';
    const UPGRADE_DOWNLOAD_COMPLETED = 'UPGRADE_DOWNLOAD_COMPLETED';
    const UPGRADE_DOWNLOAD_PROGRESSED = 'UPGRADE_DOWNLOAD_PROGRESSED';
    const CHECK_UPGRADE_AVAILABLE = 'CHECK_UPGRADE_AVAILABLE';
    const CHECK_UPGRADE_START = 'CHECK_UPGRADE_START';
    const CHECK_UPGRADE_SUCCESS = 'CHECK_UPGRADE_SUCCESS';
    const CHECK_UPGRADE_FAIL = 'CHECK_UPGRADE_FAIL';
    const CHECK_UPGRADE_SUBSCRIBE = 'CHECK_UPGRADE_SUBSCRIBE';
    const UPDATE_VERSION = 'UPDATE_VERSION';
    const UPDATE_REMOTE_VERSION = 'UPDATE_REMOTE_VERSION';
    const SKIP_UPGRADE = 'SKIP_UPGRADE';
    const START_UPGRADE = 'START_UPGRADE';
    const AUTO_UPDATE_DECLINED = 'AUTO_UPDATE_DECLINED';
    const AUTO_UPDATE_DOWNLOADED = 'AUTO_UPDATE_DOWNLOADED';
    const CLEAR_UPGRADE_TIMER = 'CLEAR_UPGRADE_TIMER';
    
    // Wallet
    const GET_NEW_ADDRESS_STARTED = 'GET_NEW_ADDRESS_STARTED';
    const GET_NEW_ADDRESS_COMPLETED = 'GET_NEW_ADDRESS_COMPLETED';
    const FETCH_TRANSACTIONS_STARTED = 'FETCH_TRANSACTIONS_STARTED';
    const FETCH_TRANSACTIONS_COMPLETED = 'FETCH_TRANSACTIONS_COMPLETED';
    const FETCH_TXO_PAGE_STARTED = 'FETCH_TXO_PAGE_STARTED';
    const FETCH_TXO_PAGE_COMPLETED = 'FETCH_TXO_PAGE_COMPLETED';
    const FETCH_TXO_PAGE_FAILED = 'FETCH_TXO_PAGE_FAILED';
    const UPDATE_TXO_FETCH_PARAMS = 'UPDATE_TXO_FETCH_PARAMS';
    const FETCH_SUPPORTS_STARTED = 'FETCH_SUPPORTS_STARTED';
    const FETCH_SUPPORTS_COMPLETED = 'FETCH_SUPPORTS_COMPLETED';
    const ABANDON_SUPPORT_STARTED = 'ABANDON_SUPPORT_STARTED';
    const ABANDON_SUPPORT_COMPLETED = 'ABANDON_SUPPORT_COMPLETED';
    const ABANDON_CLAIM_SUPPORT_STARTED = 'ABANDON_CLAIM_SUPPORT_STARTED';
    const ABANDON_CLAIM_SUPPORT_COMPLETED = 'ABANDON_CLAIM_SUPPORT_COMPLETED';
    const ABANDON_CLAIM_SUPPORT_FAILED = 'ABANDON_CLAIM_SUPPORT_FAILED';
    const ABANDON_CLAIM_SUPPORT_PREVIEW = 'ABANDON_CLAIM_SUPPORT_PREVIEW';
    const PENDING_SUPPORTS_UPDATED = 'PENDING_SUPPORTS_UPDATED';
    const UPDATE_BALANCE = 'UPDATE_BALANCE';
    const UPDATE_TOTAL_BALANCE = 'UPDATE_TOTAL_BALANCE';
    const CHECK_ADDRESS_IS_MINE_STARTED = 'CHECK_ADDRESS_IS_MINE_STARTED';
    const CHECK_ADDRESS_IS_MINE_COMPLETED = 'CHECK_ADDRESS_IS_MINE_COMPLETED';
    const SEND_TRANSACTION_STARTED = 'SEND_TRANSACTION_STARTED';
    const SEND_TRANSACTION_COMPLETED = 'SEND_TRANSACTION_COMPLETED';
    const SEND_TRANSACTION_FAILED = 'SEND_TRANSACTION_FAILED';
    const SUPPORT_TRANSACTION_STARTED = 'SUPPORT_TRANSACTION_STARTED';
    const SUPPORT_TRANSACTION_COMPLETED = 'SUPPORT_TRANSACTION_COMPLETED';
    const SUPPORT_TRANSACTION_FAILED = 'SUPPORT_TRANSACTION_FAILED';
    const CLEAR_SUPPORT_TRANSACTION = 'CLEAR_SUPPORT_TRANSACTION';
    const WALLET_ENCRYPT_START = 'WALLET_ENCRYPT_START';
    const WALLET_ENCRYPT_COMPLETED = 'WALLET_ENCRYPT_COMPLETED';
    const WALLET_ENCRYPT_FAILED = 'WALLET_ENCRYPT_FAILED';
    const WALLET_UNLOCK_START = 'WALLET_UNLOCK_START';
    const WALLET_UNLOCK_COMPLETED = 'WALLET_UNLOCK_COMPLETED';
    const WALLET_UNLOCK_FAILED = 'WALLET_UNLOCK_FAILED';
    const WALLET_DECRYPT_START = 'WALLET_DECRYPT_START';
    const WALLET_DECRYPT_COMPLETED = 'WALLET_DECRYPT_COMPLETED';
    const WALLET_DECRYPT_FAILED = 'WALLET_DECRYPT_FAILED';
    const WALLET_LOCK_START = 'WALLET_LOCK_START';
    const WALLET_LOCK_COMPLETED = 'WALLET_LOCK_COMPLETED';
    const WALLET_LOCK_FAILED = 'WALLET_LOCK_FAILED';
    const WALLET_STATUS_START = 'WALLET_STATUS_START';
    const WALLET_STATUS_COMPLETED = 'WALLET_STATUS_COMPLETED';
    const WALLET_RESTART = 'WALLET_RESTART';
    const WALLET_RESTART_COMPLETED = 'WALLET_RESTART_COMPLETED';
    const SET_TRANSACTION_LIST_FILTER = 'SET_TRANSACTION_LIST_FILTER';
    const UPDATE_CURRENT_HEIGHT = 'UPDATE_CURRENT_HEIGHT';
    const SET_DRAFT_TRANSACTION_AMOUNT = 'SET_DRAFT_TRANSACTION_AMOUNT';
    const SET_DRAFT_TRANSACTION_ADDRESS = 'SET_DRAFT_TRANSACTION_ADDRESS';
    const FETCH_UTXO_COUNT_STARTED = 'FETCH_UTXO_COUNT_STARTED';
    const FETCH_UTXO_COUNT_COMPLETED = 'FETCH_UTXO_COUNT_COMPLETED';
    const FETCH_UTXO_COUNT_FAILED = 'FETCH_UTXO_COUNT_FAILED';
    const TIP_CLAIM_MASS_STARTED = 'TIP_CLAIM_MASS_STARTED';
    const TIP_CLAIM_MASS_COMPLETED = 'TIP_CLAIM_MASS_COMPLETED';
    const TIP_CLAIM_MASS_FAILED = 'TIP_CLAIM_MASS_FAILED';
    const DO_UTXO_CONSOLIDATE_STARTED = 'DO_UTXO_CONSOLIDATE_STARTED';
    const DO_UTXO_CONSOLIDATE_COMPLETED = 'DO_UTXO_CONSOLIDATE_COMPLETED';
    const DO_UTXO_CONSOLIDATE_FAILED = 'DO_UTXO_CONSOLIDATE_FAILED';
    const PENDING_CONSOLIDATED_TXOS_UPDATED = 'PENDING_CONSOLIDATED_TXOS_UPDATED';
    
    // Claims
    const RESOLVE_URIS_STARTED = 'RESOLVE_URIS_STARTED';
    const RESOLVE_URIS_COMPLETED = 'RESOLVE_URIS_COMPLETED';
    const FETCH_CHANNEL_CLAIMS_STARTED = 'FETCH_CHANNEL_CLAIMS_STARTED';
    const FETCH_CHANNEL_CLAIMS_COMPLETED = 'FETCH_CHANNEL_CLAIMS_COMPLETED';
    const FETCH_CLAIM_LIST_MINE_STARTED = 'FETCH_CLAIM_LIST_MINE_STARTED';
    const FETCH_CLAIM_LIST_MINE_COMPLETED = 'FETCH_CLAIM_LIST_MINE_COMPLETED';
    const ABANDON_CLAIM_STARTED = 'ABANDON_CLAIM_STARTED';
    const ABANDON_CLAIM_SUCCEEDED = 'ABANDON_CLAIM_SUCCEEDED';
    const FETCH_CHANNEL_LIST_STARTED = 'FETCH_CHANNEL_LIST_STARTED';
    const FETCH_CHANNEL_LIST_COMPLETED = 'FETCH_CHANNEL_LIST_COMPLETED';
    const FETCH_CHANNEL_LIST_FAILED = 'FETCH_CHANNEL_LIST_FAILED';
    const CREATE_CHANNEL_STARTED = 'CREATE_CHANNEL_STARTED';
    const CREATE_CHANNEL_COMPLETED = 'CREATE_CHANNEL_COMPLETED';
    const CREATE_CHANNEL_FAILED = 'CREATE_CHANNEL_FAILED';
    const UPDATE_CHANNEL_STARTED = 'UPDATE_CHANNEL_STARTED';
    const UPDATE_CHANNEL_COMPLETED = 'UPDATE_CHANNEL_COMPLETED';
    const UPDATE_CHANNEL_FAILED = 'UPDATE_CHANNEL_FAILED';
    const IMPORT_CHANNEL_STARTED = 'IMPORT_CHANNEL_STARTED';
    const IMPORT_CHANNEL_COMPLETED = 'IMPORT_CHANNEL_COMPLETED';
    const IMPORT_CHANNEL_FAILED = 'IMPORT_CHANNEL_FAILED';
    const PUBLISH_STARTED = 'PUBLISH_STARTED';
    const PUBLISH_COMPLETED = 'PUBLISH_COMPLETED';
    const PUBLISH_FAILED = 'PUBLISH_FAILED';
    const SET_PLAYING_URI = 'SET_PLAYING_URI';
    const SET_CONTENT_POSITION = 'SET_CONTENT_POSITION';
    const SET_CONTENT_LAST_VIEWED = 'SET_CONTENT_LAST_VIEWED';
    const CLEAR_CONTENT_HISTORY_URI = 'CLEAR_CONTENT_HISTORY_URI';
    const CLEAR_CONTENT_HISTORY_ALL = 'CLEAR_CONTENT_HISTORY_ALL';
    const CLAIM_SEARCH_STARTED = 'CLAIM_SEARCH_STARTED';
    const CLAIM_SEARCH_COMPLETED = 'CLAIM_SEARCH_COMPLETED';
    const CLAIM_SEARCH_FAILED = 'CLAIM_SEARCH_FAILED';
    const CLAIM_SEARCH_BY_TAGS_STARTED = 'CLAIM_SEARCH_BY_TAGS_STARTED';
    const CLAIM_SEARCH_BY_TAGS_COMPLETED = 'CLAIM_SEARCH_BY_TAGS_COMPLETED';
    const CLAIM_SEARCH_BY_TAGS_FAILED = 'CLAIM_SEARCH_BY_TAGS_FAILED';
    const CLAIM_REPOST_STARTED = 'CLAIM_REPOST_STARTED';
    const CLAIM_REPOST_COMPLETED = 'CLAIM_REPOST_COMPLETED';
    const CLAIM_REPOST_FAILED = 'CLAIM_REPOST_FAILED';
    const CLEAR_REPOST_ERROR = 'CLEAR_REPOST_ERROR';
    const CLEAR_CHANNEL_ERRORS = 'CLEAR_CHANNEL_ERRORS';
    const CHECK_PUBLISH_NAME_STARTED = 'CHECK_PUBLISH_NAME_STARTED';
    const CHECK_PUBLISH_NAME_COMPLETED = 'CHECK_PUBLISH_NAME_COMPLETED';
    const UPDATE_PENDING_CLAIMS = 'UPDATE_PENDING_CLAIMS';
    const UPDATE_CONFIRMED_CLAIMS = 'UPDATE_CONFIRMED_CLAIMS';
    const ADD_FILES_REFLECTING = 'ADD_FILES_REFLECTING';
    const UPDATE_FILES_REFLECTING = 'UPDATE_FILES_REFLECTING';
    const TOGGLE_CHECKING_REFLECTING = 'TOGGLE_CHECKING_REFLECTING';
    const TOGGLE_CHECKING_PENDING = 'TOGGLE_CHECKING_PENDING';
    const PURCHASE_LIST_STARTED = 'PURCHASE_LIST_STARTED';
    const PURCHASE_LIST_COMPLETED = 'PURCHASE_LIST_COMPLETED';
    const PURCHASE_LIST_FAILED = 'PURCHASE_LIST_FAILED';
    
    // Comments
    const COMMENT_LIST_STARTED = 'COMMENT_LIST_STARTED';
    const COMMENT_LIST_COMPLETED = 'COMMENT_LIST_COMPLETED';
    const COMMENT_LIST_FAILED = 'COMMENT_LIST_FAILED';
    const COMMENT_CREATE_STARTED = 'COMMENT_CREATE_STARTED';
    const COMMENT_CREATE_COMPLETED = 'COMMENT_CREATE_COMPLETED';
    const COMMENT_CREATE_FAILED = 'COMMENT_CREATE_FAILED';
    const COMMENT_ABANDON_STARTED = 'COMMENT_ABANDON_STARTED';
    const COMMENT_ABANDON_COMPLETED = 'COMMENT_ABANDON_COMPLETED';
    const COMMENT_ABANDON_FAILED = 'COMMENT_ABANDON_FAILED';
    const COMMENT_UPDATE_STARTED = 'COMMENT_UPDATE_STARTED';
    const COMMENT_UPDATE_COMPLETED = 'COMMENT_UPDATE_COMPLETED';
    const COMMENT_UPDATE_FAILED = 'COMMENT_UPDATE_FAILED';
    const COMMENT_HIDE_STARTED = 'COMMENT_HIDE_STARTED';
    const COMMENT_HIDE_COMPLETED = 'COMMENT_HIDE_COMPLETED';
    const COMMENT_HIDE_FAILED = 'COMMENT_HIDE_FAILED';
    
    // Files
    const FILE_LIST_STARTED = 'FILE_LIST_STARTED';
    const FILE_LIST_SUCCEEDED = 'FILE_LIST_SUCCEEDED';
    const FETCH_FILE_INFO_STARTED = 'FETCH_FILE_INFO_STARTED';
    const FETCH_FILE_INFO_COMPLETED = 'FETCH_FILE_INFO_COMPLETED';
    const FETCH_FILE_INFO_FAILED = 'FETCH_FILE_INFO_FAILED';
    const LOADING_VIDEO_STARTED = 'LOADING_VIDEO_STARTED';
    const LOADING_VIDEO_COMPLETED = 'LOADING_VIDEO_COMPLETED';
    const LOADING_VIDEO_FAILED = 'LOADING_VIDEO_FAILED';
    const DOWNLOADING_STARTED = 'DOWNLOADING_STARTED';
    const DOWNLOADING_PROGRESSED = 'DOWNLOADING_PROGRESSED';
    const DOWNLOADING_COMPLETED = 'DOWNLOADING_COMPLETED';
    const DOWNLOADING_CANCELED = 'DOWNLOADING_CANCELED';
    const PLAY_VIDEO_STARTED = 'PLAY_VIDEO_STARTED';
    const FETCH_AVAILABILITY_STARTED = 'FETCH_AVAILABILITY_STARTED';
    const FETCH_AVAILABILITY_COMPLETED = 'FETCH_AVAILABILITY_COMPLETED';
    const FILE_DELETE = 'FILE_DELETE';
    const SET_FILE_LIST_SORT = 'SET_FILE_LIST_SORT';
    const PURCHASE_URI_STARTED = 'PURCHASE_URI_STARTED';
    const PURCHASE_URI_COMPLETED = 'PURCHASE_URI_COMPLETED';
    const PURCHASE_URI_FAILED:'PURCHASE_URI_FAILED';
    const CLEAR_PURCHASED_URI_SUCCESS = 'CLEAR_PURCHASED_URI_SUCCESS';
    
    // Settings
    const DAEMON_SETTINGS_RECEIVED = 'DAEMON_SETTINGS_RECEIVED';
    const DAEMON_STATUS_RECEIVED = 'DAEMON_STATUS_RECEIVED';
    const SHARED_PREFERENCE_SET = 'SHARED_PREFERENCE_SET';
    const SAVE_CUSTOM_WALLET_SERVERS = 'SAVE_CUSTOM_WALLET_SERVERS';
    const CLIENT_SETTING_CHANGED = 'CLIENT_SETTING_CHANGED';
    const UPDATE_IS_NIGHT = 'UPDATE_IS_NIGHT';
    
    // User
    const AUTHENTICATION_STARTED = 'AUTHENTICATION_STARTED';
    const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
    const AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE';
    const USER_EMAIL_DECLINE = 'USER_EMAIL_DECLINE';
    const USER_EMAIL_NEW_STARTED = 'USER_EMAIL_NEW_STARTED';
    const USER_EMAIL_NEW_SUCCESS = 'USER_EMAIL_NEW_SUCCESS';
    const USER_EMAIL_NEW_EXISTS = 'USER_EMAIL_NEW_EXISTS';
    const USER_EMAIL_NEW_FAILURE = 'USER_EMAIL_NEW_FAILURE';
    const USER_EMAIL_VERIFY_SET = 'USER_EMAIL_VERIFY_SET';
    const USER_EMAIL_VERIFY_STARTED = 'USER_EMAIL_VERIFY_STARTED';
    const USER_EMAIL_VERIFY_SUCCESS = 'USER_EMAIL_VERIFY_SUCCESS';
    const USER_EMAIL_VERIFY_FAILURE = 'USER_EMAIL_VERIFY_FAILURE';
    const USER_EMAIL_VERIFY_RETRY = 'USER_EMAIL_VERIFY_RETRY';
    const USER_PHONE_RESET = 'USER_PHONE_RESET';
    const USER_PHONE_NEW_STARTED = 'USER_PHONE_NEW_STARTED';
    const USER_PHONE_NEW_SUCCESS = 'USER_PHONE_NEW_SUCCESS';
    const USER_PHONE_NEW_FAILURE = 'USER_PHONE_NEW_FAILURE';
    const USER_PHONE_VERIFY_STARTED = 'USER_PHONE_VERIFY_STARTED';
    const USER_PHONE_VERIFY_SUCCESS = 'USER_PHONE_VERIFY_SUCCESS';
    const USER_PHONE_VERIFY_FAILURE = 'USER_PHONE_VERIFY_FAILURE';
    const USER_IDENTITY_VERIFY_STARTED = 'USER_IDENTITY_VERIFY_STARTED';
    const USER_IDENTITY_VERIFY_SUCCESS = 'USER_IDENTITY_VERIFY_SUCCESS';
    const USER_IDENTITY_VERIFY_FAILURE = 'USER_IDENTITY_VERIFY_FAILURE';
    const USER_FETCH_STARTED = 'USER_FETCH_STARTED';
    const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
    const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';
    const USER_INVITE_STATUS_FETCH_STARTED = 'USER_INVITE_STATUS_FETCH_STARTED';
    const USER_INVITE_STATUS_FETCH_SUCCESS = 'USER_INVITE_STATUS_FETCH_SUCCESS';
    const USER_INVITE_STATUS_FETCH_FAILURE = 'USER_INVITE_STATUS_FETCH_FAILURE';
    const USER_INVITE_NEW_STARTED = 'USER_INVITE_NEW_STARTED';
    const USER_INVITE_NEW_SUCCESS = 'USER_INVITE_NEW_SUCCESS';
    const USER_INVITE_NEW_FAILURE = 'USER_INVITE_NEW_FAILURE';
    const FETCH_ACCESS_TOKEN_SUCCESS = 'FETCH_ACCESS_TOKEN_SUCCESS';
    
    // Rewards
    const FETCH_REWARDS_STARTED = 'FETCH_REWARDS_STARTED';
    const FETCH_REWARDS_COMPLETED = 'FETCH_REWARDS_COMPLETED';
    const CLAIM_REWARD_STARTED = 'CLAIM_REWARD_STARTED';
    const CLAIM_REWARD_SUCCESS = 'CLAIM_REWARD_SUCCESS';
    const CLAIM_REWARD_FAILURE = 'CLAIM_REWARD_FAILURE';
    const CLAIM_REWARD_CLEAR_ERROR = 'CLAIM_REWARD_CLEAR_ERROR';
    const FETCH_REWARD_CONTENT_COMPLETED = 'FETCH_REWARD_CONTENT_COMPLETED';
    
    // Language
    const DOWNLOAD_LANGUAGE_SUCCEEDED = 'DOWNLOAD_LANGUAGE_SUCCEEDED';
    const DOWNLOAD_LANGUAGE_FAILED = 'DOWNLOAD_LANGUAGE_FAILED';
    
    // Subscriptions
    const CHANNEL_SUBSCRIBE = 'CHANNEL_SUBSCRIBE';
    const CHANNEL_UNSUBSCRIBE = 'CHANNEL_UNSUBSCRIBE';
    const HAS_FETCHED_SUBSCRIPTIONS = 'HAS_FETCHED_SUBSCRIPTIONS';
    const SET_SUBSCRIPTION_LATEST = 'SET_SUBSCRIPTION_LATEST';
    const SET_SUBSCRIPTION_NOTIFICATION = 'SET_SUBSCRIPTION_NOTIFICATION';
    const SET_SUBSCRIPTION_NOTIFICATIONS = 'SET_SUBSCRIPTION_NOTIFICATIONS';
    const CHECK_SUBSCRIPTION_STARTED = 'CHECK_SUBSCRIPTION_STARTED';
    const CHECK_SUBSCRIPTION_COMPLETED = 'CHECK_SUBSCRIPTION_COMPLETED';
    const CHECK_SUBSCRIPTIONS_SUBSCRIBE = 'CHECK_SUBSCRIPTIONS_SUBSCRIBE';
    
    // Publishing
    const CLEAR_PUBLISH = 'CLEAR_PUBLISH';
    const UPDATE_PUBLISH_FORM = 'UPDATE_PUBLISH_FORM';
    const PUBLISH_START = 'PUBLISH_START';
    const PUBLISH_SUCCESS = 'PUBLISH_SUCCESS';
    const PUBLISH_FAIL = 'PUBLISH_FAIL';
    const CLEAR_PUBLISH_ERROR = 'CLEAR_PUBLISH_ERROR';
    const REMOVE_PENDING_PUBLISH = 'REMOVE_PENDING_PUBLISH';
    const DO_PREPARE_EDIT = 'DO_PREPARE_EDIT';
    
    // Notifications
    const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION';
    const EDIT_NOTIFICATION = 'EDIT_NOTIFICATION';
    const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';
    const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';
    const CREATE_TOAST = 'CREATE_TOAST';
    const DISMISS_TOAST = 'DISMISS_TOAST';
    const CREATE_ERROR = 'CREATE_ERROR';
    const DISMISS_ERROR = 'DISMISS_ERROR';
    
    const FETCH_DATE = 'FETCH_DATE';
    
    // Cost info
    const FETCH_COST_INFO_STARTED = 'FETCH_COST_INFO_STARTED';
    const FETCH_COST_INFO_COMPLETED = 'FETCH_COST_INFO_COMPLETED';
    const FETCH_COST_INFO_FAILED = 'FETCH_COST_INFO_FAILED';
    
    // Sync
    const USER_STATE_POPULATE = 'USER_STATE_POPULATE';
    const SYNC_FATAL_ERROR = 'SYNC_FATAL_ERROR';
}
