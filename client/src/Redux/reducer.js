import {
  FIND_ALLCOUNTRY,
  FIND_ALLACTIVITY,
  FIND_NAMECOUNTRY,
  FIND_NAMEACTIVITY,
  ORDER_ALPHABETICAL,
  ORDER_POPULATION,
  FILTER_CONTINENT,
  FIND_DETAIL,
  CREATE_ACTIVITY,
} from "./actions-types";

const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  detail: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FIND_ALLCOUNTRY:
      return {
        ...state,
        countries: payload,
        allCountries: payload,
      };

    case FIND_ALLACTIVITY:
      return {
        ...state,
        activities: payload,
      };

    case FIND_NAMECOUNTRY:
      return {
        ...state,
        countries: payload,
        allCountries: payload,
      };

    case FIND_NAMEACTIVITY:
      return {
        ...state,
        activities: payload,
      };

    case FIND_DETAIL:
      return {
        ...state,
        detail: payload,
      };

    case ORDER_ALPHABETICAL:
      const orderAorD = [...state.countries];

      if (payload === "A") {
        orderAorD.sort((a, b) => a.name.localeCompare(b.name));
      } else if (payload === "D") {
        orderAorD.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        countries: orderAorD,
      };

    case ORDER_POPULATION:
      const orderNum = [...state.countries];

      if (payload === "A") {
        orderNum.sort((a, b) => a.population - b.population);
      } else if (payload === "D") {
        orderNum.sort((a, b) => b.population - a.population);
      }
      return {
        ...state,
        countries: orderNum,
      };

    case FILTER_CONTINENT:
      const copyAllCountries = [...state.allCountries];
      const filteredCountries = copyAllCountries.filter(
        (country) => country.continent === payload
      );
      return {
        ...state,
        countries:
          filteredCountries.length > 0 ? filteredCountries : copyAllCountries,
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
