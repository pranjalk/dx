export default function reducer(state = {
  cart: {},
  price: 0,
}, action) {
  switch (action.type) {
    case 'CART_ADD': {
      // console.log('data entered in reducer is', action.data);
      let newCart = {};
      if (Object.keys(state.cart).length === 0 && state.cart.constructor === Object) {
        const dataToEnterInCart = {};
        newCart = Object.assign({}, dataToEnterInCart);
      } else {
        newCart = Object.assign({}, state.cart);
      }
      if (!(action.data.dx_id in newCart)) { // if no dx center in object add dxc center
        newCart[action.data.dx_id] = {};
        newCart[action.data.dx_id].name = action.data.dxname; // set dx center name
      }
      if (!('cart' in newCart[action.data.dx_id])) { // create new cart if does not exist already
        newCart[action.data.dx_id].cart = {};
      }
      newCart[action.data.dx_id].cart[action.data.test_id] = {}; // create new test entry
      newCart[action.data.dx_id].cart[action.data.test_id].name = action.data.name;
      newCart[action.data.dx_id].cart[action.data.test_id].price = action.data.price;
      const priceNew = state.price + action.data.price;
      // console.log('newCart is', newCart);
      return { ...state, cart: newCart, price: priceNew };
    }
    case 'CART_CLEAN': {
      return { ...state, cart: {}, price: 0 };
    }
    default: {
      return { ...state };
    }
  }
}
