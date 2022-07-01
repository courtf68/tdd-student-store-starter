//inherits means extend
class ExpressError extends Error {
  constructor(message, status) {
    super(message); //y super
    this.status = status;
  }
}

class BadRequestError extends ExpressError {
  constructor(msg) {
    super(msg || "Bad request", 400);
  } //dk why
}
class NotFoundError extends ExpressError {
  constructor(msg) {
    super(msg || "Bad request", 404);
  }
}

module.exports = {
  ExpressError,
  BadRequestError,
  NotFoundError,
};
