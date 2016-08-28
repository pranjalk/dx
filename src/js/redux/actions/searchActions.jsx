import request from 'superagent';
const apiConfig = require('../../../../config/apiConfig.js');

export function getResults(str) {
  return dispatch => {
    request
      .get('http://' + apiConfig.host + ':' + apiConfig.port + '/searchdx')
      .query({ q: str })
      .end((error, response) => {
        const dataRecieved = JSON.parse(response.text);
        dispatch({ type: 'SEARCH_FETCH_RESULT', data: dataRecieved.result, searchString: str });
      });
  };
}

export function cleanResults() {
  return {
    type: 'SEARCH_CLEAN_RESULT',
    data: null,
    searchString: '',
  };
}
