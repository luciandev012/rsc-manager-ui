const order = (state = [], action) => {
  switch (action.type) {
    case "GETALL": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default order;
