import {
  ORDER_ALPHABETICAL,
  ORDER_POPULATION,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  CLEANER_FILTER,
} from "../../actions-types/actions-types";

export const orderAlphabetical = (order) => {
  return {
    type: ORDER_ALPHABETICAL,
    payload: order,
  };
};

export const orderPopulation = (order) => {
  return {
    type: ORDER_POPULATION,
    payload: order,
  };
};

export const filterContinent = (continent) => {
  return {
    type: FILTER_CONTINENT,
    payload: continent,
  };
};

export const filterActivity = (activity) => {
  return {
    type: FILTER_ACTIVITY,
    payload: activity,
  };
};

export const cleanerFilter = () => {
  return {
    type: CLEANER_FILTER,
  };
};
