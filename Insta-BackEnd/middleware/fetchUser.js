const jwt = require("jsonwebtoken");
const JWT_SECRET = "thisistoken";
const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    success = false;
    return res.status(401).json({ success, error: "invalid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    // console.log(req.user);
    next();
  } catch (error) {
    success = false;
    return res.status(400).json({ success, error: "something went worng" });
  }
};

module.exports = fetchUser;
