class ControllerError extends Error{
    constructor(message){
        super(message);
        Error.captureStackTrace(this);
    }
}

module.exports = ControllerError;