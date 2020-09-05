class ServiceError extends Error{
    constructor(error){
        super(error);
        Error.captureStackTrace(this);
    }
}

module.exports = ServiceError;