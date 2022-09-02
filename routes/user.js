const express = require("express");

const router = express.Router();


router.get("/info", async (req, res) => {

    console.log("USER PAGE");

    res.status(200).json({"user": "user router info"})
})


router.get("/test",  (req, res) => {

    console.log(process.env.PORT);
    console.log("TESTING");
    res.status(200).json({"cool": "Super"})
});





module.exports = router;