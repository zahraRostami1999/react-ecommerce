import jwt from 'jsonwebtoken';

const secretKey = "lkcvnksdnvjnfvf";

const encoderJWT = (data, cookieName) => {
    try {
        const token = jwt.sign(data, secretKey, { expiresIn: "1h" });
        return token;
    }
    catch (error) {
        console.error("Error creating JWT token:", error);
    }
}

const decoderJWT = (cookieName) => {
    try{
        const decodeedData = jwt.verify(cookieName, )
    }
    catch (error) {
        console.error("Error decoding JWT token:", error);
    }
}