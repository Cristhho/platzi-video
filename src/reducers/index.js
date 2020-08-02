const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE': {
      const exist = state.mylist.find((item) => item.id === action.payload.id);
      if (exist) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    case 'SEARCH_VIDEOS': {
      const search = action.payload.trim();
      if (search === '' || search.length < 3) {
        return {
          ...state,
          searchResults: [],
        };
      }
      const allVideos = state.trends.concat(state.originals);
      const results = allVideos.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()));
      return {
        ...state,
        searchResults: results,
      };
    }
    default:
      return state;
  }
};

export default reducer;
