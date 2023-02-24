export const initialState = {
  isLoggedIn: JSON.parse(sessionStorage.getItem("isLoggedIn")) || false,
  user: JSON.parse(sessionStorage.getItem("user")) || null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      sessionStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
      sessionStorage.setItem("user", JSON.stringify(action.payload.user))
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user
      };
    }
    case "LOGOUT": {
      sessionStorage.clear()
      return {
        ...state,
        isLoggedIn: false,
        user: null
      };
    }
    default:
      return state;
  }
};
