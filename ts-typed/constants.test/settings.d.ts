/* hardcoded names still exist for these in reducers/settings.js - only discovered when debugging */

/* Many SETTINGS are stored in the localStorage by their name -
    be careful about changing the value of a SETTINGS constant, as doing so can invalidate existing SETTINGS */
declare namespace SETTINGS {
    const SHOW_NSFW = 'showNsfw';
    const CREDIT_REQUIRED_ACKNOWLEDGED = 'credit_required_acknowledged';
    const NEW_USER_ACKNOWLEDGED = 'welcome_acknowledged';
    const EMAIL_COLLECTION_ACKNOWLEDGED = 'email_collection_acknowledged';
    const FIRST_RUN_STARTED = 'first_run_started';
    const INVITE_ACKNOWLEDGED = 'invite_acknowledged';
    const FOLLOWING_ACKNOWLEDGED = 'following_acknowledged';
    const TAGS_ACKNOWLEDGED = 'tags_acknowledged';
    const REWARDS_ACKNOWLEDGED = 'rewards_acknowledged';
    const LANGUAGE = 'language';
    const SEARCH_IN_LANGUAGE = 'search_in_language';
    const SHOW_MATURE = 'show_mature';
    const HOMEPAGE = 'homepage';
    const HIDE_REPOSTS = 'hide_reposts';
    const SHOW_ANONYMOUS = 'show_anonymous';
    const SHOW_UNAVAILABLE = 'show_unavailable';
    const INSTANT_PURCHASE_ENABLED = 'instant_purchase_enabled';
    const INSTANT_PURCHASE_MAX = 'instant_purchase_max';
    const THEME = 'theme';
    const THEMES = 'themes';
    const AUTOMATIC_DARK_MODE_ENABLED = 'automatic_dark_mode_enabled';
    const AUTOPLAY = 'autoplay';
    const AUTOPLAY_NEXT = 'autoplay_next';
    const OS_NOTIFICATIONS_ENABLED = 'os_notifications_enabled';
    const AUTO_DOWNLOAD = 'auto_download';
    const AUTO_LAUNCH = 'auto_launch';
    const TO_TRAY_WHEN_CLOSED = 'to_tray_when_closed';
    const SUPPORT_OPTION = 'support_option';
    const HIDE_BALANCE = 'hide_balance';
    const HIDE_SPLASH_ANIMATION = 'hide_splash_animation';
    const FLOATING_PLAYER = 'floating_player';
    const DARK_MODE_TIMES = 'dark_mode_times';
    const ENABLE_SYNC = 'enable_sync';
    const ENABLE_PUBLISH_PREVIEW = 'enable-publish-preview';
    const TILE_LAYOUT = 'tile_layout';
    const VIDEO_THEATER_MODE = 'video_theater_mode';
    const VIDEO_PLAYBACK_RATE = 'video_playback_rate';

    // mobile settings
    const BACKGROUND_PLAY_ENABLED = 'backgroundPlayEnabled';
    const FOREGROUND_NOTIFICATION_ENABLED = 'foregroundNotificationEnabled';
    const KEEP_DAEMON_RUNNING = 'keepDaemonRunning';
    const SHOW_URI_BAR_SUGGESTIONS = 'showUriBarSuggestions';
    const RECEIVE_SUBSCRIPTION_NOTIFICATIONS = 'receiveSubscriptionNotifications';
    const RECEIVE_REWARD_NOTIFICATIONS = 'receiveRewardNotifications';
    const RECEIVE_INTERESTS_NOTIFICATIONS = 'receiveInterestsNotifications';
    const RECEIVE_CREATOR_NOTIFICATIONS = 'receiveCreatorNotifications';
}