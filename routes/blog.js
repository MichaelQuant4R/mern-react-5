const express = require("express");


const router = express.Router();


router.get("/blogs", async (req, res) => {

    console.log("BLOG PAGE");

    const blogs =[
        {id: 1, title: "Blog title 1"},
        {id: 2, title: "Blog title 2"},
        {id: 3, title: "Blog title 3"},
        {id: 4, title: "Blog title 4"},
        {id: 5, title: "Blog title 5"},
                    ];

    res.status(200).json({"blogs": blogs})
})  






modules.export = router;