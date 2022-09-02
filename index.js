const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouter = require("./routes/user");


dotenv.config();

const app = express();
// app.use(cors());
app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(express.json());


app.use("/api/user", userRouter);






app.listen(process.env.PORT, () => {
    console.log("CONNECTED TO DB NOW");
    console.log("PORT", process.env.PORT)
})