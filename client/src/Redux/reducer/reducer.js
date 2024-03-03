import {
  FIND_ALLCOUNTRY,
  FIND_ALLACTIVITY,
  FIND_NAMECOUNTRY,
  FIND_NAMEACTIVITY,
  ORDER_ALPHABETICAL,
  ORDER_POPULATION,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  CLEANER_FILTER,
  FIND_DETAIL,
  CREATE_ACTIVITY,
  DELETE_ACTIVITY,
  CLEANER_STATE,
  LOADER,
} from "../actions-types/actions-types";

const initialState = {
  countries: [],
  allCountries: [],
  activities: [],
  detail: [],
  isLoading: true,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FIND_ALLCOUNTRY:
      return {
        ...state,
        countries: payload,
        allCountries: payload,
      };

    case FIND_NAMECOUNTRY:
      return {
        ...state,
        countries: payload,
        allCountries: payload,
      };

    case FIND_DETAIL:
      return {
        ...state,
        detail: payload,
      };

    case FIND_ALLACTIVITY:
      return {
        ...state,
        activities: payload,
      };

    case FIND_NAMEACTIVITY:
      return {
        ...state,
        activities: payload,
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
        activities: payload,
      };

    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: payload,
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
      if (filteredCountries.length > 0) {
        return {
          ...state,
          countries: filteredCountries,
        };
      } else {
        alert(`No matches found to filter by continent ${payload}`)
        return {
          ...state,
          countries: copyAllCountries,
        };
      }

    case FILTER_ACTIVITY:
      const copy2AllCountries = [...state.allCountries];
      const filteredActivity = copy2AllCountries.filter((country) =>
        country.Activities.some((activity) => activity.name === payload)
      );
      if (filteredActivity.length > 0) {
        return {
          ...state,
          countries: filteredActivity,
        };
      } else {
        alert(`No matches found to filter by activity ${payload}`)
        return {
          ...state,
          countries: copy2AllCountries,
        };
      }

    case CLEANER_FILTER:
      return {
        ...state,
        countries: state.allCountries,
      };

    case CLEANER_STATE:
      if (payload === "home") {
        return {
          ...state,
          countries: [],
          allCountries: [],
          activities: [],
        };
      } else if (payload === "activities") {
        return {
          ...state,
          activities: [],
        };
      } else if (payload === "details") {
        return {
          ...state,
          detail: [],
        };
      }

    case LOADER:
      return {
        ...state,
        isLoading: payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
