// Controller file for Authentication Logic

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

export const login = (req, res) => {
  console.log("Hello from the login controller");
};

export const logout = (req, res) => {
  console.log("Hello from the logout controller");
};
