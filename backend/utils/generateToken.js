import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwtToken", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // millisecond format
    httpOnly: true, // Prevents cross-site scripting attacks (XSS)
    sameSite: "strict", // Prevents cross-site request forgery attacks (CSRF)
    secure: process.env.NODE_ENV !== "development"
  })
};

export default generateTokenAndSetCookie;
