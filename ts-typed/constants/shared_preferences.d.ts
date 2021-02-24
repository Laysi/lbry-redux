
/*
 * How to use this file:
 * Settings exported from here will trigger the setting to be
 * sent to the preference middleware when set using the
 * usual setDaemonSettings and clearDaemonSettings methods.
 *
 * See redux/settings/actions in the app for where this is used.
 */

import * as DAEMON_SETTINGS from "./daemon_settings";
import * as SETTINGS from "./settings";

// DAEMON
export const SDK_SYNC_KEYS:string[]

// CLIENT
export const CLIENT_SYNC_KEYS:string[]
