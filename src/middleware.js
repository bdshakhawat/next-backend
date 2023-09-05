// import { NextResponse } from "next/server";

// L-52----------------
// Function defined by next js and will be
// executed automatically
// export function middleware(){
//     console.log("I am middleware");
// }

// import { NextResponse } from "next/server";

// we can define the path in which directory
// the middleware will be executed
// export const config={
//     // middleware will be executed all files
//     // of api directory
//     matcher:['/api/:path*']
// }
// ----------------------------------

// L-53-------------------------------------
// work with conditional statement
// export function middleware(){
    // for writing condition if my request url
    // pathname starts with ("/api/product") 
    // then i will do something
    // if(req.nextUrl.pathname.startsWith){
    //     console.log("This is api route inside product directory")
    //     return NextResponse.next();
    // }
    // else if(req.nextUrl.pathname.startsWith("/cartList")){
    //     console.log("This is page route inside cart list Directory");
    //     // By using this middleware we can pass or stop any user here
    //     // Now to pass the user we can write the following code
    //     return NextResponse.next();

    // }
    // Like this we can add neumorous conditions
// }

// ----------------------------------------

// L-54
// export function middleware(req,res){
//     if(req.nextUrl.pathname.startsWith("/api/product")){

//         const reqHeader=new Headers(req.headers);
//         const token=reqHeader.get("token");
//         if (token==="123-ABC"){
//             return NextResponse.next();
//         }
//         else{
//             return NextResponse.json({msg:'Failed'},{status:401})
//         }

        
//     }
// }




