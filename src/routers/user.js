const express = require("express");
const login = require("../controllers/user/login/login");
const signup = require("../controllers/user/signup/signup");
const refresh = require("../controllers/user/refresh");
const auth = require("../middlewares/auth");
const verify = require("../controllers/user/verify/verify");
const sendCode = require("../controllers/user/sendCode");
const name = require("../controllers/user/name/name");
const verified = require("../middlewares/verified");
const image = require("../controllers/user/image/image");
const logout = require("../controllers/user/logout");

const user = express.Router();

user.get("/refresh", auth, refresh)
user.get("/sendCode", auth, sendCode);
user.get("/logout", auth, logout);
user.post("/login", login);
user.post("/signup", signup);
user.post("/verify", auth, verify);
user.post("/name", auth, verified, name);
user.post("/image", auth, verified, image);

exports.userRouter = user;