const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;
const upDateDB = require("./src/utils/upDateDB.js")

// // conn
// //   .sync({ force: true })
// //   .then(() => {
// //     server.listen(PORT, async () => {
// //       console.log(`Server listening on port ${PORT}`);
// //     });
// //   })
// //   .catch((error) => console.error(error));

async function startServer() {
  try {
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
