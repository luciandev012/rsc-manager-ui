const importNote = (state = [], action) => {
  switch (action.type) {
    case "GETALL": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default importNote;
