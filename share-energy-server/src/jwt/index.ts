import jwt from "jsonwebtoken";

const JWT_SECRET = "123321";

const JWT_CONFIG = {
    expiresIn: "1d",
}

export const generateToken = (username: string, type: string) => {
    const token = jwt.sign({ username, type }, JWT_SECRET, JWT_CONFIG);
    
    return token
}
