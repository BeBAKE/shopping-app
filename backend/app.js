const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const index = require("./routes/index");
const connectDB = require("./db");
require("dotenv").config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "https://luxyfurniture.projectlive.me",
    // origin: [
    //   "http://localhost:5175",
    //   "http://localhost:5174",
    //   "http://localhost:5173",
    // ],
  })
);
app.use(express.json());
app.use(cookieParser());

connectDB(process.env.MONGO_URI);
app.use("/api/v1/", index);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
