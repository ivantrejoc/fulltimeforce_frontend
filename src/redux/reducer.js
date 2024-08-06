import { GET_API_TOKEN } from "./action-types";

const initialState = {
  token: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API_TOKEN:
      console.log("EL STATE LUEGO DE GUARDAR EL TOKEN: ",{ ...state, token: action.payload });
      return { ...state, token: action.payload};
    default:
      return { ...state };
  }
};

export default rootReducer;
