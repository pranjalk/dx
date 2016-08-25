export default function reducer(state = {
  display_result: {},
}, action) {
  switch (action.type) {
    case 'DISPLAY_FETCH_RESULT': {
      return { ...state, display_result: action.data };
    }
    case 'DISPLAY_CLEAN_RESULT': {
      return { ...state, display_result: {} };
    }
    default: {
      return { ...state };
    }
  }
}
