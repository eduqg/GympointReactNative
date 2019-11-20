import produce from 'immer';

const INITIAL_STATE = {
  allCheckins: [],
  numberCheckins: null,
  loading: false,
  error: '',
};
export default function checkin(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@checkin/CREATE_CHECKIN_SUCCESS': {
        draft.numberCheckins = action.payload.numberCheckins;
        break;
      }
      case '@checkin/LOAD_CHECKINS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@checkin/LOAD_CHECKINS_SUCCESS': {
        draft.allCheckins = action.payload.allCheckins;
        draft.numberCheckins = action.payload.numberCheckins;
        draft.loading = false;
        break;
      }
      case '@checkin/LOAD_CHECKINS_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
