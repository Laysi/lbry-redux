
declare type LbryUrlObj = {
  // Path and channel will always exist when calling parseURI
  // But they may not exist when code calls buildURI
  isChannel?: boolean;
  path?: string;
  streamName?: string;
  streamClaimId?: string;
  channelName?: string;
  channelClaimId?: string;
  primaryClaimSequence?: number;
  secondaryClaimSequence?: number;
  primaryBidPosition?: number;
  secondaryBidPosition?: number;
  startTime?: number;

  // Below are considered deprecated and should not be used due to unreliableness with claim.canonical_url
  claimName?: string;
  claimId?: string;
  contentName?: string;
};

declare const regexInvalidURI:RegExp;
declare const regexAddress:RegExp;

/**
 * Parses a LBRY name into its component parts. Throws errors with user-friendly
 * messages for invalid names.
 *
 * Returns a dictionary with keys:
 *   - path (string)
 *   - isChannel (boolean)
 *   - streamName (string, if present)
 *   - streamClaimId (string, if present)
 *   - channelName (string, if present)
 *   - channelClaimId (string, if present)
 *   - primaryClaimSequence (int, if present)
 *   - secondaryClaimSequence (int, if present)
 *   - primaryBidPosition (int, if present)
 *   - secondaryBidPosition (int, if present)
 */
export declare function parseURI(url: string, requireProto?: boolean): LbryUrlObj;

/** Takes a parseable LBRY URL and converts it to standard, canonical format */
export declare function normalizeURI(URL: string): string;

export declare function isURIValid(URL: string): boolean;

export declare function isNameValid(claimName: string);

export declare function isURIClaimable(URL: string);