const initialState = {
  isLoggedIn: false,
  userId: {},
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        isLoggedIn: true,
        userId: action.data,
      };

    case "LOG_OUT":
      return {
        isLoggedIn: false,
        userId: {},
      };

    default:
      return state;
  }
};