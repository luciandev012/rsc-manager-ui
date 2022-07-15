const brand = (state = [], action) => {
  switch (action.type) {
    case "GETBRANDS":
      return action.payload;
    case "CREATE":
      return [...state, action.payload];
    case "UPDATE": {
      console.log(state);
      return state.map((brand) => {
        //console.log(action.payload);
        brand.brandId != action.payload.brandId ? brand : action.payload;
      });
    }

    default:
      return state;
  }
};

export default brand;
