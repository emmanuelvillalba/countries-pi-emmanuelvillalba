export default (activityDate, fieldName, errors) => {
  
  const lettersOnlyRegex = /^[a-zA-Z]+$/;
  if (fieldName === "name") {
    if (!activityDate.name) {
      return { ...errors, name: "The activity must have a name" };
    } else if (!lettersOnlyRegex.test(activityDate.name)) {
      return { ...errors, name: "Only letters allowed" };
    } else {
      return { ...errors, name: "" };
    }
  }

  const integerRegex = /^\d+$/;
  if (fieldName === "difficulty") {
    if (!activityDate.difficulty || isNaN(Number(activityDate.difficulty))) {
      return { ...errors, difficulty: "Enter a number" };
    } else if (activityDate.difficulty < 1 || activityDate.difficulty > 5) {
      return { ...errors, difficulty: "Number between 1 and 5" };
    } else if (!integerRegex.test(activityDate.difficulty)) {
      return { ...errors, difficulty: "The number must be integer" };
    } else {
      return { ...errors, difficulty: "" };
    }
  }

  if (fieldName === "duration") {
    if (!activityDate.duration || isNaN(Number(activityDate.duration))) {
      return { ...errors, duration: "Enter a number" };
    } else if (activityDate.duration < 1 || activityDate.duration > 72) {
      return { ...errors, duration: "Hour range: min 1 - max 72" };
    } else {
      return { ...errors, duration: "" };
    }
  }

  if (fieldName === "season") {
    if (!activityDate.season) {
      return { ...errors, season: "Season is required" };
    } else {
      return { ...errors, season: "" };
    }
  }

  if (fieldName === "countries") {
    if (!activityDate.countries || activityDate.countries.length === 0) {
      return { ...errors, countries: "Assign at least one country ID" };
    } else {
      return { ...errors, countries: "" };
    }
  }

  return errors;
};
