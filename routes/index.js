var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
let jwt = require("express-jwt");

let Topic = mongoose.model("Topic");
let Opmerking = mongoose.model("Opmerking");

let auth = jwt({
  secret:  "ifthisendsupingithubyoufailtheclass",
  userProperty: "payload"
});

/* GET home page. */
router.get("/webapptaak/topics/", function(req, res, next) {
  let query = Topic.find();
  query.exec(function(err, topics) {
    if (err) return next(err);
    res.json(topics);
  });
});

router.post("/webapptaak/topics/", auth, function(req, res, next) {
  let topic = new Topic({
    name: req.body.name,
    vraag: req.body.vraag
  });
  topic.save(function(err, post) {
    if (err) {
      return next(err);
    }
    res.json(topic);
  });
});

router.put("/webapptaak/topics/:_id", auth, function(req, res) {
  Topic.findByIdAndUpdate({
      id: req.params.id
  },{$set: {
    name: req.body.name
  }}, {upsert: true}, function(err, Topic) {
    if(err) {
      res.status(500).send(err)
    } else {
      console.log(Topic);
      res.status(204).send()
    }
  })
  /*let topic = new Topic({
    name: req.body.name,
    vraag: req.body.vraag,
    opmerkingen: req.body.opmerkingen
  });
  topic.save(function(err, post) {
    if (err) {
      return next(err);
    }
    res.json(topic);
  });*/
});


router.param("topic", function(req, res, next, id) {
  let query = Topic.findById(id);
  query.exec(function(err, topic) {
    if (err) {
      return next(err);
    }
    if (!topic) {
      return next(new Error("not found " + id));
    }
    req.topic = topic;
    return next();
  });
});



router.get("/webapptaak/topics/:topic", function(req, res) {
  req.topic.populate("opmerkingen", function(err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

router.post("/webapptaak/topic/:topic/opmerkingen", function(req, res, next) {
  let ing = new Opmerking(req.body);
  console.log(ing);
  ing.save(function(err, opmerking) {
    if (err) return next(err);

    req.topic.opmerkingen.push(opmerking);
    req.topic.save(function(err, rec) {
      if (err) return next(err);
      res.json(opmerking);
    });
  });
});

module.exports = router;
