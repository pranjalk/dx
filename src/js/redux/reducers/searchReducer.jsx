export default function reducer(state = {
  result: [],
  searchInput: '',
}, action) {
  switch (action.type) {
    case 'SEARCH_FETCH_RESULT': {
      return { ...state, result: action.data, searchInput: action.searchString };
    }
    case 'SEARCH_CLEAN_RESULT': {
      return { ...state, result: [], searchInput: action.searchString };
    }
    default: {
      return { ...state };
    }
  }
}
