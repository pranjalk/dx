import request from 'superagent';

export function getResults(str) {
  return function (dispatch) {
    request
      .get('http://localhost:3000/searchdx')
      .query({ q: str })
      .end((error, response) => {
        //console.log(error);
        //console.log(response.text);
        const data_recieved = JSON.parse(response.text);
        dispatch({ type: 'FETCH_RESULT', data: data_recieved.result });
      });
  };
}
