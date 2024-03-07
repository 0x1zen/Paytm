
const express = require('express');
const userRouter = require("./user");
const accountRouter = require("./account");
const { authMiddleware } = require('../middleware');

const router = express.Router();

router.use('/me',authMiddleware,(req,res)=>{
    res.status(200).json({
        authentication:true
    })
})

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;