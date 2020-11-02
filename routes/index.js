var express=require("express");
var router = express.Router();

router.get("/admin", function(req, res, next){
    // res.render("index", {title:"Express"});
    if(req.session.displayName){
        res.render("G_main", {"nickname":req.session.displayName});
    }else{
        res.render("G_main", {"nickname":""});
    }
});

router.get("/member", function(req, res, next){
    // res.render("index", {title:"Express"});
    if(req.session.displayName){
        res.render("M_main", {"nickname":req.session.displayName});
    }else{
        res.render("M_main", {"nickname":""});
    }
});

module.exports = router; 