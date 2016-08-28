import request from 'superagent';
const apiConfig = require('../../../../config/apiConfig.js');

export function getDisplayResults(str) {
  return dispatch => {
    request
      .get('http://' + apiConfig.host + ':' + apiConfig.port + '/dxdetails')
      .query({ q: str })
      .end((error, response) => {
        const dataRecieved = JSON.parse(response.text);
        dispatch({ type: 'DISPLAY_FETCH_RESULT', data: dataRecieved.result[0] });
      });
  };
}

export function getDxTestResults(str) {
  return dispatch => {
    request
      .get('http://' + apiConfig.host + ':' + apiConfig.port + '/dxtests')
      .query({ q: str })
      .end((error, response) => {
        const dataRecieved = JSON.parse(response.text);
        dispatch({ type: 'DISPLAY_TEST_RESULT', data: dataRecieved });
      });
  };
}

export function cleanDisplayResults() {
  return {
    type: 'DISPLAY_CLEAN_RESULT',
    data: null,
  };
}
