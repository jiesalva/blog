
const express = require("express")

const router = express.Router();

router.get("/home",(req,res) => {
    res.send("welcome home");
});
router.get("/contact",(req,res) => {
    res.send("welcome contact");
});
router.get("/about",(req,res) => {
    res.send("welcome about");
});
router.get("/info",(req,res) => {
    res.send("welcome info");
});
router.get("/dashboard",(req,res) => {
    res.send("welcome dashboard");
});
module.exports = router;