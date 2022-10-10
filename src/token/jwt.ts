import jwt from "jsonwebtoken";

const SECRET: string = String(process.env.JWT_KEY);

const verifyToken = (data: string) => {
  try {
    const dataToken = jwt.verify(data, SECRET);
    return dataToken;
  } catch (error) {
    return null;
  }
};

export default { verifyToken };
