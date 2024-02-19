export default (activityDate) => {
  let errors = {};

  if (!activityDate.name) {
    errors.name = "The activity must have a name";
  }

  if (!activityDate.difficulty || activityDate.difficulty < 1 || activityDate.difficulty > 5) {
    errors.difficulty = "Number between 1 and 5";
  }

  if (!activityDate.duration || isNaN(Number(activityDate.duration))) {
    errors.duration = "Enter a number";
  }

  if (!activityDate.season) {
    errors.season = "Season is required";
  }

  if (!activityDate.countries || activityDate.countries.length === 0) {
    errors.countries = "You must assign at least one country ID";
  }

  return errors;
};
