import User from "../model/userModel.js";

//for register

const registerUser = async (name, email, password, isAdmin) => {
  const user = await User.create({
    name,
    email,
    password,
    isAdmin,
  });
  return user;
};

//check User
const checkUser = async (email) => {
  const user = await User.findOne({ email });

  if (user) {
    return user;
  }
};

//for login

const loginUser = async (email, password) => {
  console.log(email, password);
  const user = await User.findOne({ email });
  console.log("user", user);

  if (user && (await user.matchPassword(password))) {
    return user;
  } else {
    throw new Error("Invalid email or password");
  }
};

export { registerUser, checkUser, loginUser };
