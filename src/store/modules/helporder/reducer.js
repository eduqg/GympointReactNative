import produce from 'immer';

const INITIAL_STATE = {
  allHelporders: [],
  loading: false,
  error: '',
};
export default function helporder(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@helporder/LOAD_HELPORDERS_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@helporder/LOAD_HELPORDERS_SUCCESS': {
        draft.allHelporders = action.payload.allHelporders;
        draft.loading = false;

        break;
      }

      case '@helporder/LOAD_HELPORDERS_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
