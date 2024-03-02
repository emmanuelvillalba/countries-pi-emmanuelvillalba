import axios from "axios";
import URL_SERVER from "../helpers/URL_SERVER";
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
} from "./actions-types";

export const findAllCountries = (start, end) => {
  return async (dispatch) => {
    dispatch(loader(true));
    try {
      const { data } = await axios.get(URL_SERVER + "/countries");
      let payloadData = data;

      if (start !== undefined && end !== undefined) {
        payloadData = data.slice(start, end);
      }

      dispatch(loader(false));
      return dispatch({
        type: FIND_ALLCOUNTRY,
        payload: payloadData,
      });
    } catch (error) {
      dispatch(loader(false));
      if (error.response.data.error) {
        window.alert(error.response.data.error);
      } else {
        window.alert(error.message);
      }
    }
  };
};

export const findAllActivities = () => {
  return async (dispatch) => {
    dispatch(loader(true));
    try {
      const { data } = await axios.get(URL_SERVER + "/activities");
      dispatch(loader(false)); 
      return dispatch({
        type: FIND_ALLACTIVITY,
        payload: data,
      });
    } catch (error) {
      dispatch(loader(false)); 
      if (error.response.data.error) {
        window.alert(error.response.data.error);
      } else {
        window.alert(error.message);
      }
    }
  };
};

export const findNameCountries = (name) => {
  return async (dispatch) => {
    dispatch(loader(true));
    try {
      const { data } = await axios.get(URL_SERVER + `/countries?name=${name}`);
      dispatch(loader(false));
      return dispatch({
        type: FIND_NAMECOUNTRY,
        payload: data,
      });
    } catch (error) {
      dispatch(loader(false));
      if (error.response.data.error) {
        window.alert(error.response.data.error);
      } else {
        window.alert(error.message);
      }
    }
  };
};

export const findNameActivities = (name) => {
  return async (dispatch) => {
    dispatch(loader(true));
    try {
      const { data } = await axios.get(URL_SERVER + `/activities?name=${name}`);
      dispatch(loader(false));
      return dispatch({
        type: FIND_NAMEACTIVITY,
        payload: data,
      });
    } catch (error) {
      dispatch(loader(false));
      if (error.response.data.error) {
        window.alert(error.response.data.error);
      } else {
        window.alert(error.message);
      }
    }
  };
};

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

export const findDetail = (id) => {
  return async (dispatch) => {
    dispatch(loader(true));
    try {
      const { data } = await axios.get(URL_SERVER + `/countries/${id}`);
      dispatch(loader(false));
      return dispatch({
        type: FIND_DETAIL,
        payload: data,
      });
    } catch (error) {
      dispatch(loader(false));
      if (error.response.data.error) {
        window.alert(error.response.data.error);
      } else {
        window.alert(error.message);
      }
    }
  };
};

export const createActivity = (activityDate) => {
  return async (dispatch) => {
    dispatch(loader(true));
    try {
      const { data } = await axios.post(
        URL_SERVER + `/activities`,
        activityDate
      );
      dispatch(loader(false));
      alert("Successfully created tourist activity");
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      dispatch(loader(false));
      if (error.response.data.error) {
        window.alert(error.response.data.error);
      } else {
        window.alert(error.message);
      }
    }
  };
};

export const deleteActivity = (id) => {
  return async (dispatch) => {
    dispatch(loader(true));
    try {
      const { data } = await axios.delete(URL_SERVER + `/activities/${id}`);
      dispatch(loader(false));
      alert("Successfully delete tourist activity");
      return dispatch({
        type: DELETE_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      dispatch(loader(false));
      if (error.response.data.error) {
        window.alert(error.response.data.error);
      } else {
        window.alert(error.message);
      }
    }
  };
};

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
