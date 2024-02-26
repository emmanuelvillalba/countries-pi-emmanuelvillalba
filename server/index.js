require("dotenv").config();
const server = require("./src/server");
const { conn } = require("./src/db.js");
const { LOCAL_PORT } = process.env;
const upDateDB = require("./src/utils/upDateDB.js")

async function startServer() {
  try {
    await conn.authenticate();
    console.log("Connection has been established successfully.");
    await conn.sync({ force: false });
    console.log("All models were synchronized successfully");
    await upDateDB()
    await server.listen(LOCAL_PORT, () => {
      console.log(`Server listening on port ${LOCAL_PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect:", error.message);
  }
}

startServer();
