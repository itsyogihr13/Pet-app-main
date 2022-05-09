import { GET_DATA } from "./action";

const initialState = {
  petData: [],
};

export const getReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...store,
        petData: payload,
      };
    default:
      return store;
  }
};
