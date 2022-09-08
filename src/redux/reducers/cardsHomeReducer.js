const initState = {
  popularMovie: [],
  topRatingMovie: [],
  popularTVShow: [],
  topRatingTVShow: [],
};

const carouselReducer = (state = initState, action) => {
  switch (action.type) {
    case "cardshome/add":
      state.popularMovie = [...action.payload.popularMovie];
      state.topRatingMovie = [...action.payload.topRatingMovie];
      state.popularTVShow = [...action.payload.popularTVShow];
      state.topRatingTVShow = [...action.payload.topRatingTVShow];
      return { ...state };
    default:
      return state;
  }
};

export default carouselReducer;
