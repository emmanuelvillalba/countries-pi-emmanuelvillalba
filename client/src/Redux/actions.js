import axios from "axios";
import URL_SERVER from "../helpers/URL_SERVER";
export const FIND_ALLCOUNTRY = "FIND_ALLCOUNTRY";
export const FIND_ALLACTIVITY = "FIND_ALLACTIVITY";
export const FIND_NAMECOUNTRY = "FIND_NAMECOUNTRY";
export const ORDER_ALPHABETICAL = "ORDER_ALPHABETICAL";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const FIND_DETAIL = "FIND_DETAIL";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const FIND_NAMEACTIVITY = "FIND_NAMEACTIVITY";

export const findAllCountries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_SERVER + "/countries");
      return dispatch({
        type: FIND_ALLCOUNTRY,
        payload: data,
      });
    } catch (error) {
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
    try {
      const { data } = await axios.get(URL_SERVER + "/activities");
      return dispatch({
        type: FIND_ALLACTIVITY,
        payload: data,
      });
    } catch (error) {
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
    try {
      const { data } = await axios.get(URL_SERVER + `/countries?name=${name}`);
      return dispatch({
        type: FIND_NAMECOUNTRY,
        payload: data,
      });
    } catch (error) {
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
    try {
      const { data } = await axios.get(URL_SERVER + `/activities?name=${name}`);
      return dispatch({
        type: FIND_NAMEACTIVITY,
        payload: data,
      });
    } catch (error) {
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

export const findDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_SERVER + `/countries/${id}`);
      return dispatch({
        type: FIND_DETAIL,
        payload: data,
      });
    } catch (error) {
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
    try {
      const { data } = await axios.post(
        URL_SERVER + `/activities`,
        activityDate
      );
      return dispatch({
        type: CREATE_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      if (error.response.data.error) {
        window.alert(error.response.data.error);
      } else {
        window.alert(error.message);
      }
    }
  };
};
