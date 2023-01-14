/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

const app = require("./app");

const PORT = process.env.PORT || 3306;

app.listen(PORT, () => {
  console.log(`Backend is listening on port ${PORT}`);
});
