const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function (req, res){
    burger.all(function (data){
        let hbsObject = {
            burgers : data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put("/api/devour", function (req, res) {
  burger.updateOne(req.body.id, function (data){});
});

  // Export routes for server.js to use.
  module.exports = router;