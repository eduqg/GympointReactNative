export function createCheckinRequest(id) {
  return {
    type: '@checkin/CREATE_CHECKIN_REQUEST',
    payload: { id },
  };
}

export function createCheckinSuccess(numberCheckins) {
  return {
    type: '@checkin/CREATE_CHECKIN_SUCCESS',
    payload: { numberCheckins },
  };
}

export function createCheckinFailure() {
  return {
    type: '@checkin/CREATE_CHECKIN_FAILURE',
  };
}
