const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt-nodejs");
const SALT_WORK_FACTOR = 10;

const validateEmail = email => {
  return /\S+@\S+\.\S+/.test(email);
};

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: "Email address is required",
    validate: [validateEmail, "Please enter a valid email"]
  },
  password: {
    type: String,
    required: true
  },
  role: String
});

userSchema.pre("save", function(next) {
  const user = this;
  if (user.isNew || user.isModified("password")) {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

module.exports = mongoose.model("users", userSchema);
