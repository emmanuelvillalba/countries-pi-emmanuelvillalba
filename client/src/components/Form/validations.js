export default (activityDate, fieldName) => {
  let errors = {};

  if (fieldName === "name" && !activityDate.name) {
    errors.name = "The activity must have a name";
  }

  if (
    fieldName === "difficulty" &&
    (!activityDate.difficulty ||
      activityDate.difficulty < 1 ||
      activityDate.difficulty > 5)
  ) {
    errors.difficulty = "Number between 1 and 5";
  }

  if (
    fieldName === "duration" &&
    (!activityDate.duration || isNaN(Number(activityDate.duration)))
  ) {
    errors.duration = "Enter a number";
  }

  if (fieldName === "season" && !activityDate.season) {
    errors.season = "Season is required";
  }

  if (
    fieldName === "countries" &&
    (!activityDate.countries || activityDate.countries.length === 0)
  ) {
    errors.countries = "You must assign at least one country ID";
  }

  return errors;
};
