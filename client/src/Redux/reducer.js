import { FIND_NAMECOUNTRY } from "./actions";

const initialState = {
  countries: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FIND_NAMECOUNTRY:
      return {
        ...state,
        countries: payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
