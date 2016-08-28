export default function reducer(state = {
  display_result: {},
  dx_tests: {},
}, action) {
  switch (action.type) {
    case 'DISPLAY_FETCH_RESULT': {
      return { ...state, display_result: action.data };
    }
    case 'DISPLAY_CLEAN_RESULT': {
      return { ...state, display_result: {} };
    }
    case 'DISPLAY_TEST_RESULT': {
      return { ...state, dx_tests: action.data };
    }
    default: {
      return { ...state };
    }
  }
}
