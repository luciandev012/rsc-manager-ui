const category = (state = [], action) => {
  switch (action.type) {
    case "GETCATES":
      return action.payload;
    default:
      return state;
  }
};

export default category;
