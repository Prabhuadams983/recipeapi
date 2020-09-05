const ControllerError = require("./ControllerError");
const ApplicationConstants = require("../constants/ApplicationConstants");


ApplicationErrorHandler = (error,req,res,next)=>{
    if(error instanceof Error){
        res.status(200).send({
            'status':200,
            "msg":error.message
        })
    }else if(error.message.includes('NOT_FOUND')){
            res.status(404).send({
                'status':404,
                'msg':ApplicationConstants.NOT_FOUND
            })
        }else if(error.message.includes('check')){
            res.status(400).send({
                'status':400,
                'msg':ApplicationConstants.NO_BODY
            })
        }else{
        res.status(500).send({
            'status':500,
            'msg':ApplicationConstants.COMMON_ERROR
        })
    }
}

module.exports = ApplicationErrorHandler