// CREATE
export function loadHelpordersRequest(id) {
  return {
    type: '@helporder/LOAD_HELPORDERS_REQUEST',
    payload: { id },
  };
}
export function loadHelpordersSuccess(allHelporders) {
  return {
    type: '@helporder/LOAD_HELPORDERS_SUCCESS',
    payload: { allHelporders },
  };
}
export function loadHelpordersFailure() {
  return {
    type: '@helporder/LOAD_HELPORDERS_FAILURE',
  };
}
