import { SignJWT, jwtVerify } from "jose";

// From here we will encode and decode jwt
// token. For this we need to create an 
// .env environment file because for creating
// jwt token we need to create a secreat key
// and this key should be kept in this .env
// file for security reason.
export async function GET(req,res){
// Preparation of reading secret key:
    // For creating jwt token firstly we
    // have to prepare the secret key by calling
    // TextEncoder function, encode() function
    // and read the secret key value or .env 
    // value by (process.env.JWT_KEY) :
    const key=new TextEncoder().encode(process.env.JWT_KEY);
// Creating JWT Token by await process by importing
// SignJWT and for verification jwtVerify from jose

     
}