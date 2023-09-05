// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";


// export async function GET(req,res){
// ------ Reciver email's part -----
    // When we send email then we need to recieve 
// it in an email. Now we can recive this
// email through url parameter or params. Now
// we are creating URL params here:

// const {searchParams}=new URL(req,res);

// Now to recieve the email through query 
// string on which email i want to send
// the email:

// let ToEmail=searchParams.get('email');
// ----------------------------------------
// Now to send email we need an SMTP configuration
// To do that we need to call the 
// CreateTransport function and give an object
// inside the function and inside that object
// the SMTP cofiguration will remain and actually
// with this SMTP configuration our email
// will be transport or send to other mail or
// reciver mail. 

// Creating Transport
// now keep the transporter inside a variable
// ----------------------------------------
// let Transporter=nodemailer.createTransport({
//     host:'mail.teamrabbil.com',
//     port:25,
//     secure:false,
//     auth:{
//         user:"info@teamrabbil.com",
//         pass:'~sR4[bhaC[Qs'
//     },

//     tls:{rejectUnauthorized:false}
//    })

// //    prepare the Email
//    let myEmail={
//     from:"Test email from next js app<info@teamrabbil.com>",
//     to:ToEmail,
//     subject:"Test email from next js app",
//     text:"Test email from next js application",
// }
// ---------------------------------------------
// now to send the email call the Transport.sendMail() function and keep
// the function inside a try and catch block because problem may arise
// due to SMTP sender or Preperation or receiver email. To avoid or handle
// this error try catch block will be used.If the email go to 
// try block then email will send and give a message success but if
// the mail go to catch block then it will not send and give message
// failed
//  try{
    // let result= await Transporter.sendMail(myEmail);
    // return NextResponse.json({msg:"success"})
    // return NextResponse.json({msg:"result"})

// }
//  catch(e){
//    return NextResponse.json({msg:"Not Success"})
//  }


// }