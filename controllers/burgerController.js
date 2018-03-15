var express = require("express");

var router = express.Router();
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.Burger.findAll({
    attributes: ["id","burger_name","devoured","createdAt","updatedAt"],
    raw: true
  }).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function(data) {
    res.json({ id: data.insertId });
    // res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
  db.Burger.update({devoured:req.body.devoured},
  {
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    console.log(data);
    res.json("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
