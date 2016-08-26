export default function reducer(state = {
  cart: [],
  price: 0,
  checkTests: [],
}, action) {
  switch (action.type) {
    case 'CART_ADD': {
      const updatedCart = state.cart.concat(action.data);
      const priceNew = updatedCart.reduce((acc, test) => {
        return acc + test.price;
      }, 0);
      const updatedcheckTests = state.checkTests.concat(action.data.test_id);
      return { ...state, cart: updatedCart, price: priceNew, checkTests: updatedcheckTests };
    }
    case 'CART_CLEAN': {
      return { ...state, cart: [], price: 0, checkTests: {} };
    }
    default: {
      return { ...state };
    }
  }
}
