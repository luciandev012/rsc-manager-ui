const initialState = {
  username: "",
  token: "",
  authenticate: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        username: action.payload.username,
        token: action.payload.token,
        authenticate: true,
      };
    default:
      return state;
  }
};

export default auth;
