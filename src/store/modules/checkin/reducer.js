import produce from 'immer';

const INITIAL_STATE = {
  numberCheckins: null,
};
export default function checkin(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@checkin/CREATE_CHECKIN_SUCCESS': {
        draft.numberCheckins = action.payload.numberCheckins;
        break;
      }
      default:
    }
  });
}
