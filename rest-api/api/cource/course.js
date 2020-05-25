const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200)
    .json({
        courseID:1,
        name:'Java',
        duration:'2 Months',
        description:'Complete core Java for absolute novice learners',
        fees:'Rs 8000',
        logo:""
    },
    {
        courseID:2,
        name:'C++',
        duration:'2 Months',
        description:'Complete C++ for absolute novice learners',
        fees:'Rs 8000',
        logo:""
    },
    {
        courseID:3,
        name:'Python',
        duration:'2 Months',
        description:'Complete Python course for absolute novice learners',
        fees:'Rs 8000',
        logo:""
    }
    );
});

module.exports=router;