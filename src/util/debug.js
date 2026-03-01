let logger;
let errorLogger;

export function setLogger(log, err) {
    logger = log;
    errorLogger = err;
}

export function isEnable() {
    return logger != null;
}

export function log(message, ...optionalParams) {
    if (logger) {
        logger(message, ...optionalParams);
    }
}
export function error(message, ...optionalParams) {
    if (errorLogger) {
        errorLogger(message, ...optionalParams);
    }
}
