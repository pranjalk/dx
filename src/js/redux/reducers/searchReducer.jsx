export default function reducer(state = {
  result: [],
}, action) {
  switch (action.type) {
    case 'FETCH_RESULT': {
      //console.log('data in reducer is ', action.data);
      return { ...state, result: action.data };
    }
    default: {
      return { ...state };
    }
  }
}
