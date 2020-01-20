// @flow
import * as ACTIONS from 'constants/action_types';
import Lbry from 'lbry';
import { selectClaimsByUri, selectMyChannelClaims } from 'redux/selectors/claims';
import { doToast } from 'redux/actions/notifications';

export function doCommentList(uri: string, page: number = 1, pageSize: number = 99999) {
  return (dispatch: Dispatch, getState: GetState) => {
    const state = getState();
    const claim = selectClaimsByUri(state)[uri];
    const claimId = claim ? claim.claim_id : null;

    dispatch({
      type: ACTIONS.COMMENT_LIST_STARTED,
    });
    Lbry.comment_list({
      claim_id: claimId,
      page,
      page_size: pageSize,
    })
      .then((result: CommentListResponse) => {
        const { items: comments } = result;
        dispatch({
          type: ACTIONS.COMMENT_LIST_COMPLETED,
          data: {
            comments,
            claimId: claimId,
            uri: uri,
          },
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: ACTIONS.COMMENT_LIST_FAILED,
          data: error,
        });
      });
  };
}

export function doCommentCreate(
  comment: string = '',
  claim_id: string = '',
  channel: ?string,
  parent_id?: string
) {
  return (dispatch: Dispatch, getState: GetState) => {
    const state = getState();
    dispatch({
      type: ACTIONS.COMMENT_CREATE_STARTED,
    });
    const myChannels = selectMyChannelClaims(state);
    const namedChannelClaim =
      myChannels && myChannels.find(myChannel => myChannel.name === channel);
    const channel_id = namedChannelClaim ? namedChannelClaim.claim_id : null;
    return Lbry.comment_create({
      comment: comment,
      claim_id: claim_id,
      channel_id: channel_id,
      parent_id: parent_id,
    })
      .then((result: CommentCreateResponse) => {
        dispatch({
          type: ACTIONS.COMMENT_CREATE_COMPLETED,
          data: {
            comment: result,
            claimId: claim_id,
          },
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.COMMENT_CREATE_FAILED,
          data: error,
        });
        dispatch(
          doToast({
            message: 'Oops, someone broke comments.',
            isError: true,
          })
        );
      });
  };
}

export function doCommentHide(comment_id: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.COMMENT_HIDE_STARTED,
    });
    return Lbry.comment_hide({
      comment_ids: [comment_id],
    })
      .then((result: CommentHideResponse) => {
        dispatch({
          type: ACTIONS.COMMENT_HIDE_COMPLETED,
          data: result,
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.COMMENT_HIDE_FAILED,
          data: error,
        });
        dispatch(
          doToast({
            message: 'There was an error hiding this comment. Please try again later.',
            isError: true,
          })
        );
      });
  };
}

export function doCommentAbandon(comment_id: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ACTIONS.COMMENT_ABANDON_STARTED,
    });
    return Lbry.comment_abandon({
      comment_id: comment_id,
    })
      .then((result: CommentAbandonResponse) => {
        dispatch({
          type: ACTIONS.COMMENT_ABANDON_COMPLETED,
          data: {
            comment_id: comment_id,
            abandoned: result,
          },
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.COMMENT_ABANDON_FAILED,
          data: error,
        });
        dispatch(
          doToast({
            message: 'There was an error hiding this comment. Please try again later.',
            isError: true,
          })
        );
      });
  };
}

export function doCommentUpdate(comment_id: string, comment: string) {
  // if they provided an empty string, they must have wanted to abandon
  if (comment === '') {
    return doCommentAbandon(comment_id);
  } else {
    return (dispatch: Dispatch) => {
      dispatch({
        type: ACTIONS.COMMENT_UPDATE_STARTED,
      });
      return Lbry.comment_update({
        comment_id: comment_id,
        comment: comment,
      })
        .then((result: CommentUpdateResponse) => {
          dispatch({
            type: ACTIONS.COMMENT_UPDATE_COMPLETED,
            data: {
              comment: result,
            },
          });
        })
        .catch(error => {
          dispatch({ type: ACTIONS.COMMENT_UPDATE_FAILED, data: error });
          dispatch(
            doToast({
              message: 'There was an error hiding this comment. Please try again later.',
              isError: true,
            })
          );
        });
    };
  }
}
