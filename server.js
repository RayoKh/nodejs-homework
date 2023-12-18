import mongoose from "mongoose";

import app from "./app.js";

// import { DB_HOST } from "./config.js";
const { DB_HOST, PORT } = process.env;
// console.log(process.env);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// .then(() => console.log("Database connection successful"))
