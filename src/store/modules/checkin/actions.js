// LOAD
export function loadCheckingsRequest(id) {
  return {
    type: '@checkin/LOAD_CHECKINS_REQUEST',
    payload: { id },
  };
}

export function loadCheckingsSuccess({ allCheckins, numberCheckins }) {
  return {
    type: '@checkin/LOAD_CHECKINS_SUCCESS',
    payload: { allCheckins, numberCheckins },
  };
}

export function loadCheckingsFailure() {
  return {
    type: '@checkin/LOAD_CHECKINS_FAILURE',
  };
}

// CREATE
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
