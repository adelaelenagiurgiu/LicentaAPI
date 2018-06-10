const User = require("../models/User");
const jwt = require("jwt-simple");
const config = require("../config/keys");

tokenForUser = user => {
  const timestamp = new Date().getTime();
  return jwt.encode(
    {
      sub: user.id,
      iat: timestamp
    },
    config.secret
  );
};

exports.Register = (req, res, next) => {
  const email = req.body.email;

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) return next(err);
    if (existingUser)
      return res
        .status(422)
        .json({ error: "Adresa de email este deja inregistrata" });
    const user = new User({
      email: email,
      password: req.body.password,
      role: req.body.role || "patient"
    });
    user.save(err => {
      if (err) return next(err);
      res.json({ user_id: user._id, token: tokenForUser(user) });
    });
  });
};

exports.Login = (req, res, next) => {
  const user = req.user;
  User.findOne({ email: user.email }, (err, existingUser) => {
    if (err) return next(err);
    if (existingUser) {
      res.send({
        user: existingUser,
        token: tokenForUser(user)
      });
    }
  });
};
