const { Activity } = require("../db");
const findAllActivities = require("./findAllActivities");

const deleteActivity = async (id) => {
  await Activity.destroy({
    where: { id },
  });

  const deletedActivity = findAllActivities();
  return deletedActivity;
};

module.exports = deleteActivity;
