const User = require("../model/user");
const Cart = require("../model/cart");
const Order = require("../model/order");

const z = require("zod");
const jwt = require("jsonwebtoken");

const signupSchame = z.object({
  email: z
    .string({ required_error: "email is required" })
    .email()
    .trim()
    .max(255, { message: "email can't be that long " })
    .toLowerCase(),
  username: z
    .string({ required_error: "username can't be required" })
    .min(3, { message: "username should be atleast 3 characters" })
    .trim()
    .max(255, { message: "username can't be more than 255 chars" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(8, { message: "password can't be less than 8 characters" })
    .max(255, { message: "password can't be more than 255 chars" }),
});

const signinSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .min(3, { message: "username must be atleast 3 characters long" })
    .max(255, { message: "username can't be more than 255 chars" }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(8, { message: "password can't be less than 8 characters" })
    .max(255, { message: "password can't be more than 255 chars" }),
});

const signup = async (req, res) => {
  const data = req.body;
  try {
    const parsedData = signupSchame.safeParse(data);
    if (parsedData.success === false) {
      return res.status(400).json({ message: "Error in user input" });
    }

    const { username, email, password } = parsedData.data;

    const userExists = await User.find({ email: email }, email);
    if (userExists.length !== 0) {
      return res.status(400).json({ message: "email elready exists" });
    }

    const user = await User.create({
      username: username,
      email: email,
      password: password,
    });
    //! Cart
    const cart = await Cart.create({
      userId: user._id,
      cart: [],
    });

    //! Order
    const order = await Order.create({
      userId: user._id,
      order: [],
    });

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000 + 60 * 60),
        userId: user._id,
      },
      process.env.SECRET
    );

    res.cookie("auth_token", token, {
      expire: Math.floor(Date.now() / 1000 + 60 * 60),
      httpOnly: true,
      secure: true,
    });

    res
      .status(200)
      .json({ cart, order, username: user.username, token: token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const signin = async (req, res) => {
  const data = req.body;
  try {
    const parsedData = signinSchema.safeParse(data);
    if (parsedData.success === false) {
      return res.status(400).json({ message: "user input error" });
    }

    const { email, password } = parsedData.data;

    const user = await User.find(
      { email: email, password: password },
      "email username"
    );

    if (!user.length) {
      return res.status(409).json({
        message:
          "Error while loging in : Either username or password is incorrect",
      });
    }

    //! Cart
    const cart = await Cart.findOne({ userId: user[0]._id });
    //! Order
    const order = await Order.findOne({ userId: user[0]._id });
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000 + 60 * 60),
        userId: user[0]._id,
      },
      process.env.SECRET
    );

    res.cookie("auth_token", token, {
      expire: Math.floor(Date.now() / 1000 + 60 * 60),
      httpOnly: true,
      secure: true,
    });

    res.status(200).json({
      cart: cart,
      order: order,
      username: user[0].username,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: "Error while loging in" });
  }
};

const logout = (req, res) => {
  if (req?.cookies?.auth_token) {
    res.clearCookie("auth_token", {
      expire: Math.floor(Date.now() / 1000 + 60 * 60),
      httpOnly: true,
      secure: true,
    });
    return res.send("Cookie Cleared");
  }
  return res.status(400).json({ message: "User already logged out" });
};
module.exports = {
  signin,
  signup,
  logout,
};
