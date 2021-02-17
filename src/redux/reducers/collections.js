// @flow
import { handleActions } from 'util/redux-utils';
import * as ACTIONS from 'constants/action_types';

const getTimestamp = () => {
  return Math.floor(Date.now() / 1000);
};

const defaultState: CollectionState = {
  builtin: {
    watchlater: {
      items: [
        {
          url: 'lbry://@seriously#5/seriouspublish#c',
          claimId: 'c1b740eb88f96b465f65e5f1542564539df1c62e',
        },
      ],
      id: 'watchlater',
      name: 'Watch Later',
      updatedAt: getTimestamp(),
      type: 'stream',
    },
    favorites: {
      items: [
        {
          url: 'lbry://@seriously#5/seriouspublish#c',
          claimId: 'c1b740eb88f96b465f65e5f1542564539df1c62e',
        },
      ],
      id: 'favoritestreams',
      name: 'Favorites',
      type: 'stream',
      updatedAt: getTimestamp(),
    },
  },
  resolved: {},
  unpublished: {},
  saved: [],
  mine: [],
  isResolvingCollectionById: {},
  error: null,
};

const collectionsReducer = handleActions(
  {
    [ACTIONS.UNPUBLISHED_COLLECTION_CREATE]: (state, action) => {
      const { entry: params } = action.data; // { id:, items: Array<any>}
      // entry
      const newListTemplate = {
        id: params.id,
        name: params.name,
        items: [],
        updatedAt: getTimestamp(),
        type: 'mixed', // what
      };

      const newList = Object.assign({}, newListTemplate, { ...params });
      const { unpublished: lists } = state;
      const newLists = Object.assign({}, lists, { [params.id]: newList });

      return {
        ...state,
        unpublished: newLists,
      };
    },

    [ACTIONS.UNPUBLISHED_COLLECTION_DELETE]: (state, action) => {
      const { unpublished: lists } = state;
      const { name } = action.data;
      if (lists && lists[name] && lists[name].userList) {
        delete lists[name];
      }
      return Object.assign({}, state, {
        lists,
      });
    },

    [ACTIONS.UNPUBLISHED_COLLECTION_UPDATE]: (state, action) => {
      const { unpublished: lists } = state;
      const newLists = Object.assign({}, lists);
      const { id, collection } = action.data;
      newLists[id] = collection;

      return {
        ...state,
        unpublished: newLists,
      };
    },
    [ACTIONS.UNPUBLISHED_COLLECTION_ERROR]: (state, action) => {
      return Object.assign({}, state, {
        error: action.data.message,
      });
    },

    [ACTIONS.COLLECTION_RESOLVE_STARTED]: (state, action) => {
      const { ids } = action.data;
      const { isResolvingCollectionById } = state;
      const newResolving = Object.assign({}, isResolvingCollectionById);
      ids.forEach(id => {
        newResolving[id] = true;
      });
      return Object.assign({}, state, {
        ...state,
        error: '',
        isResolvingCollectionById: newResolving,
      });
    },
    // [ACTIONS.USER_STATE_POPULATE]: (
    //   state,
    //   action
    // ) => {
    //   const { collectionTest } = action.data;
    //   // do something about checking timestamps and merging
    //   return {
    //     ...state,
    //     unpublished: collectionTest || state.unpublished,
    //
    //   };
    // },
    [ACTIONS.COLLECTION_RESOLVE_COMPLETED]: (state, action) => {
      const { resolvedCollections } = action.data;
      const resolvedIds = Object.keys(resolvedCollections);
      const { isResolvingCollectionById, resolved: lists } = state;
      // remove resolvedIds from isResolvingCollectionById{}
      const newResolving = Object.assign({}, isResolvingCollectionById);
      const newLists = Object.assign({}, lists, resolvedCollections);

      return Object.assign({}, state, {
        ...state,
        resolved: newLists,
        isResolvingCollectionById: newResolving,
      });
    },
    [ACTIONS.COLLECTION_RESOLVE_FAILED]: (state, action) => {
      const { id } = action.data;
      const { isResolvingCollectionById } = state;
      const newResolving = isResolvingCollectionById.filter(i => i !== id);
      return Object.assign({}, state, {
        ...state,
        isResolvingCollectionById: newResolving,
        error: action.data.message,
      });
    },
  },
  defaultState
);

export { collectionsReducer };
