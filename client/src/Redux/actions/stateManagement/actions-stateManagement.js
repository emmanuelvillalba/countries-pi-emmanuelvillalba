import { CLEANER_STATE, LOADER } from "../../actions-types/actions-types";

export const cleanerState = (component) => {
  return {
    type: CLEANER_STATE,
    payload: component,
  };
};

export const loader = (value) => {
  return {
    type: LOADER,
    payload: value,
  };
};
