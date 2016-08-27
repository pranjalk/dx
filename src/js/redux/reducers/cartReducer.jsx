export default function reducer(state = {
  cart: {},
  price: 0,
  checkTests: [],
}, action) {
  switch (action.type) {
    case 'CART_ADD': {
      // console.log('data entered in reducer is', action.data);
      let newCart = {};
      if (Object.keys(state.cart).length === 0 && state.cart.constructor === Object) {
        const dataToEnterInCart = {};
        dataToEnterInCart[action.data.test_id] = action.data;
        newCart = Object.assign({}, dataToEnterInCart);
      } else {
        const dataToEnterInCart = {};
        dataToEnterInCart[action.data.test_id] = action.data;
        newCart = Object.assign({}, state.cart);
        newCart[action.data.test_id] = action.data;
        // console.log('new data entering in is', newCart);
      }
      const priceNew = state.price + action.data.price;

      return { ...state, cart: newCart, price: priceNew };
    }
    case 'CART_CLEAN': {
      return { ...state, cart: {}, price: 0, checkTests: [] };
    }
    default: {
      return { ...state };
    }
  }
}
