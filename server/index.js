const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;
const upDateDB = require("./src/utils/upDateDB.js")

async function startServer() {
  try {
    await conn.authenticate();
    console.log("Connection has been established successfully.");
    await conn.sync({ force: true });
    console.log("All models were synchronized successfully");
    await upDateDB()
    await server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect:", error.message);
  }
}

startServer();
