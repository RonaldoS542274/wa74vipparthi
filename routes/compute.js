var express = require('express');
var router = express.Router();
var num;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams

    
    num=Number(search_params.get("x"))
    // if paramter is not specified  value of Number(search_params.get("x")) is always zero
    //console.log(Number(search_params.get("x"))+"hello")
    if(num == 0)
      num=Math.random()
    res.write('Math.log1p applied to '+num+" is "+Math.log1p(num)+"\n");
    res.write('Math.acosh applied to '+num+" is "+Math.acosh(num)+"\n");
    res.end('Math.tan applied to '+num+" is "+Math.tan(num));
 });

module.exports = router;