require('dotenv').config()
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = process.env.PORT;

conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
