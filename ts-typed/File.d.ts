import { StreamMetadata } from './Claim';
import * as ACTIONS from './constants/action_types';

export declare type FileListItem = {
  metadata: StreamMetadata;
  added_on: number;
  blobs_completed: number;
  blobs_in_stream: number;
  blobs_remaining: number;
  channel_claim_id: string;
  channel_name: string;
  claim_id: string;
  claim_name: string;
  completed: false;
  content_fee?: {txid: string;};
  purchase_receipt?: {txid: string;amount: string;};
  download_directory: string;
  download_path: string;
  file_name: string;
  key: string;
  mime_type: string;
  nout: number;
  outpoint: string;
  points_paid: number;
  protobuf: string;
  reflector_progress: number;
  sd_hash: string;
  status: string;
  stopped: false;
  stream_hash: string;
  stream_name: string;
  streaming_url: string;
  suggested_file_name: string;
  total_bytes: number;
  total_bytes_lower_bound: number;
  is_fully_reflected: boolean;
  // TODO: sdk plans to change `tx`
  // It isn't currently used by the apps
  tx: {};
  txid: string;
  uploading_to_reflector: boolean;
  written_bytes: number;
};

export declare type FileState = {
  failedPurchaseUris: Array<string>;
  purchasedUris: Array<string>;
};

export declare type PurchaseUriCompleted = {
  type: typeof ACTIONS.PURCHASE_URI_COMPLETED;
  data: {
    uri: string;
    streamingUrl: string;
  };
};

export declare type PurchaseUriFailed = {
  type: typeof ACTIONS.PURCHASE_URI_FAILED;
  data: {
    uri: string;
    error: any;
  };
};

export declare type PurchaseUriStarted = {
  type: typeof ACTIONS.PURCHASE_URI_STARTED;
  data: {
    uri: string;
    streamingUrl: string;
  };
};

export declare type DeletePurchasedUri = {
  type: typeof ACTIONS.CLEAR_PURCHASED_URI_SUCCESS;
  data: {
    uri: string;
  };
};