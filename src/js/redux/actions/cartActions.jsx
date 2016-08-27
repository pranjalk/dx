import request from 'superagent';

export function addItemToCart(items) {
  return dispatch => {
    request
      .get('http://localhost:3000/dxdetails')
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
