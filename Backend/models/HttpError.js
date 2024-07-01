
class HttpError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.code = errorCode in http.STATUS_CODES? errorCode:500;
    }
}

module.exports = HttpError;
