var express = require('express');
var router = express.Router();
var number = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  number+=1;
  res.send(`Users Accesses are: ${number}`);
});

module.exports = router;
