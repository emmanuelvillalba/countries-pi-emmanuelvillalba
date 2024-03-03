import axios from "axios";
import URL_SERVER from "../../../helpers/URL_SERVER";
import {
  FIND_ALLACTIVITY,
  FIND_NAMEACTIVITY,
  CREATE_ACTIVITY,
  DELETE_ACTIVITY,
} from "../../actions-types/actions-types";
import { loader } from "../stateManagement/actions-stateManagement";

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
