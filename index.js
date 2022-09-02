const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const userRouter = require("./routes/user");


dotenv.config();

const app = express();
// app.use(cors());
app.use(cors({
    origin: "https://mern-react-cv.herokuapp.com/",
}));
app.use(express.json());


app.use("/api/user", userRouter);

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}






app.listen(process.env.PORT, () => {
    console.log("CONNECTED TO DB NOW");
    console.log("PORT", process.env.PORT)
})