
const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account");
const { meMiddleware } = require('../meMiddleware');


const router = express.Router();

router.get("/me",meMiddleware,(req,res)=>{
    if (req.isAuthenticated) {
        return res.status(200).json({ authentication: true });
    } else {
        return res.status(403).json({ authentication: false });
    }

})
router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;