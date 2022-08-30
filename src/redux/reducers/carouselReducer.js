const initState = [];

const carouselReducer = (state = initState, action) => {
  switch (action.type) {
    case "carousel/add":
      state = [...action.payload];
      return state;
    default:
      return state;
  }
};

export default carouselReducer;
