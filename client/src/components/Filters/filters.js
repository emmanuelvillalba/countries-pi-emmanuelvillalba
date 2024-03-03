import {
  orderAlphabetical,
  orderPopulation,
  filterContinent,
  filterActivity,
  cleanerFilter,
} from "../../redux/actions/filters/actions-filters";

export const handleAlphabetical = (event, dispatch, setCurrentPage) => {
  dispatch(orderAlphabetical(event.target.value));
  setCurrentPage(1);
};
export const handlePopulation = (event, dispatch, setCurrentPage) => {
  dispatch(orderPopulation(event.target.value));
  setCurrentPage(1);
};

export const handleFilterContinent = (event, dispatch, setCurrentPage) => {
  dispatch(filterContinent(event.target.value));
  setCurrentPage(1);
};

export const handleFilterActivity = (event, dispatch, setCurrentPage) => {
  dispatch(filterActivity(event.target.value));
  setCurrentPage(1);
};

export const handlerCleaner = (dispatch) => {
  dispatch(cleanerFilter());

  let selects = document.querySelectorAll("select");
  selects.forEach((select) => {
    select.value = select.options[0].value;
  });
};
