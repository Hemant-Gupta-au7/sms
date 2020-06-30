import jwt from "jsonwebtoken";
module.exports = (req, res, next) => {
  try {
    var decoded = jwt.verify( req.session.token1, "wrong");
    next();
  } catch (err) {
    console.log(err);
  }
};
