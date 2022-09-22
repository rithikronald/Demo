import types from "../types";

const initialState = {
  loaderOpen: false,
};

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_LOADER:
      return {
        loaderOpen: true,
      };
    case types.CLOSE_LOADER:
      return {
        loaderOpen: false,
      };
    default:
      return state;
  }
};

export default drawerReducer;