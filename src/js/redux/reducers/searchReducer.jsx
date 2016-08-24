export default function reducer(state = {
  result: [],
  searchInput: '',
}, action) {
  switch (action.type) {
    case 'FETCH_RESULT': {
      return { ...state, result: action.data, searchInput: action.searchString };
    }
    case 'CLEAN_RESULT': {
      return { ...state, result: [], searchInput: '' };
    }
    default: {
      return { ...state };
    }
  }
}
