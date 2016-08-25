import request from 'superagent';

export function getDisplayResults(str) {
  return dispatch => {
    request
      .get('http://localhost:3000/dxdetails')
      .query({ q: str })
      .end((error, response) => {
        const dataRecieved = JSON.parse(response.text);
        dispatch({ type: 'DISPLAY_FETCH_RESULT', data: dataRecieved.result[0] });
      });
  };
}

export function cleanDisplayResults() {
  return {
    type: 'DISPLAY_CLEAN_RESULT',
    data: null,
  };
}
