class ErrorHandler extends Error {
  status;
  msg;

  constructor(status, msg) {
    super();
    this.msg = msg;
    this.status = status;
  }
}

class InternalError extends ErrorHandler {
  constructor(msg) {
    super(500, msg, 'Internal error');
  }
}

class Unauthorized extends ErrorHandler {
  constructor(msg) {
    super(401, msg, 'Unauthorized');
  }
}

class Forbidden extends ErrorHandler {
  constructor(msg) {
    super(403, msg, 'Forbidden');
  }
}

class BadRequest extends ErrorHandler {
  constructor(msg) {
    super(400, msg, 'Bad Request');
  }
}

class NotFound extends ErrorHandler {
  constructor(msg) {
    super(404, msg, 'Not Found');
  }
}

const handleError = (error, next) => {
  if (error instanceof ErrorHandler) return next(error);
  console.error(error);
  return next(new InternalError(error.message));
};

module.exports = { handleError, ErrorHandler, InternalError, Unauthorized, Forbidden, BadRequest, NotFound };
