import axios from "axios";
import URL_SERVER from "../helpers/URL_SERVER";
export const FIND_NAMECOUNTRY = "FIND_NAMECOUNTRY";

export const findNameCountries = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL_SERVER + `countries?name=${name}`);
      return dispatch({
        type: FIND_NAMECOUNTRY,
        payload: data,
      });
    } catch (error) {
      window.alert(error.message);
    }
  };
};
