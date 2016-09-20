import request from 'superagent';

const apiConfig = require('../../../../config/apiConfig.js');

export function addItemToCart(items) {
  return dispatch => {
    request
      .get('http://' + apiConfig.host + ':' + apiConfig.port + '/dxdetails')
      .query({ q: items.dx_id })
      .end((error, response) => {
        const dataRecieved = JSON.parse(response.text);
        const newItems = items;
        newItems.dxname = dataRecieved.result[0].name;
        dispatch({ type: 'CART_ADD', data: newItems });
      });
  };
}

export function cleanCart() {
  return {
    type: 'CART_CLEAN',
    data: null,
    price: 0,
  };
}
