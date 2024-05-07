import jwt from "jsonwebtoken";
import User from "../model/userModel.js";
import Joi from "joi";


// //Protect routes
// const protect = async (req, res, next) => {
//   let token;

//   //Read the JWT from the cookie
//   token = req.cookies.jwt;
//   // console.log(token)

//   if (token) {
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       // console.log(decoded);
//       req.user = await User.findById(decoded.userId).select("-password");

//       next();
//     } catch (error) {
//       console.log(error);
//       res.status(401).json({
//         message: "Authentication failed. Please sign in again.",
//       });
//     }
//   } else {
//     res.status(401).json({
//       message: "Authentication failed. No token provided.",
//     });
//   }
// };

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    console.log("token", token);
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = await User.findById(decoded.userId).select("-password");
    // console.log(req.user);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "Authentication failed. Please sign in again.",
    });
  }
};


// // Get user Id
const userId = (req) => {
  const token = req.cookies.jwt;

  if (!token) {
    return null;
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken.userId;
  } catch (error) {
    console.log("Error verifying JWT:", error);
    return null;
  }
};

//check user
const checkUserDetails = (req, res, next) => {
  // console.log(req)
  const user_id = userId(req);
  const id = req.params.id;
  console.log(user_id, id);
  if (id === user_id) {
    next();
  } else {
    return res.status(404).json({
      message: "User ID Not Found",
    });
  }
};

// Admin middleware
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({
      message: "Not authorized as admin",
    });
  }
};

// Register User(validation)
const register = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    isAdmin: Joi.boolean(),
  });
  return schema.validate(data);
};

// Login User(validation)
const login = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  return schema.validate(data);
};

export { protect, checkUserDetails, register, login };
