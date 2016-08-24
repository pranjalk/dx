import request from 'superagent';

export function getResults(str) {
  return dispatch => {
    request
      .get('http://localhost:3000/searchdx')
      .query({ q: str })
      .end((error, response) => {
        const dataRecieved = JSON.parse(response.text);
        dispatch({ type: 'FETCH_RESULT', data: dataRecieved.result, searchString: str });
      });
  };
}

export function cleanResults() {
  return {
    type: 'CLEAN_RESULT',
    data: null,
  };
}
