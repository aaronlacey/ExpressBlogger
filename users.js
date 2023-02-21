const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({sucess: true, route: "users", message:"welcome to the users page"});
});

module.exports = router;