import * as actionType from "../actions/type";

export const todoreducers = (state = [], action) => {
  switch (action.type) {
    case actionType.ADDNEW_TODO:
      return [action.payload, ...state];

    default:
      return state;
  }
};

export default todoreducers;
