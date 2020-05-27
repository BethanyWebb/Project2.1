var express = require("express");
var university = require("../models/university.js");

var router = express.Router();

router.get("/", function(req, res) {

  university.selectAll(function(data) {
    var hdbrsObj = {
      universities: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });

  router.post("/api/universities", function(req, res) {
    university.insertOne(
      ["first_name", "last_name", "email_address", "nationality", "highest_education", "desired_country", "student_visa" ],
      [req.body.first_name, req.body.last_name, req.body.email_address, req.body.nationality, req.body.highest_education, req.body.desired_country, req.body.student_visa ],
      function(result) {
        // Send back the ID of new burger
        res.json({ id: result.insertId });
      }
    );
  });

  // router.put("/api/burgers/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;

  //   console.log("condition", condition);
  //   burger.updateOne({ devoured: req.body.devoured }, condition, function(
  //     result
  //   ) {
  //     if (result.changedRows === 0) {
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });
  // router.delete("/api/burgers/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;
  //   console.log("condition", condition);

  //   burger.deleteOne(condition, function(result) {
  //     if (result.changedRows === 0) {
  //       return res.status(404).end();
  //     } else {
  //       res.status(200).end();
  //     }
  //   });
  // });
});
module.exports = router;
