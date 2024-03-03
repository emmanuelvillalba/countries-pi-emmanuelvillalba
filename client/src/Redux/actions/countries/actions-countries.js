import axios from "axios";
import URL_SERVER from "../../../helpers/URL_SERVER";
import {
  FIND_ALLCOUNTRY,
  FIND_NAMECOUNTRY,
  FIND_DETAIL,
} from "../../actions-types/actions-types";
import { loader } from "../stateManagement/actions-stateManagement";

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
