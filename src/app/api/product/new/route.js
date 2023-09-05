// import { NextResponse } from "next/server"
// All types of request and response related
// things will be handled here Like:
// ***** Request *****
// i)  How to grab a request ii) How to 
// generate a response against a request 
// iii) How to manage the url parameter
// iv) How to manage the body of a response
// v) How to manage cookies
// vi) How to manage form data
// ***** Response ****
// i) How to manage JSON response object
// ii) How to manage json Array
// iii) How to manage response status code
// iv) How to manage response cookie
// v) How to manage response redirect



// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
// import {headers} from "next/headers";

// GET
// export async function GET(req,res){

    // Here we need to receive the request parameter id and
    // value set 100 in postman with searchParams() next js method
    // now our request parameter is coming through the url so
    // we need to catch the url and search for parameter like this:
    // const {searchParams}=new URL(req.url);
    // now to catch the id
    // let id=searchParams.get('id');
    // now to catch the city
    // let city=searchParams.get('City');
    // now to catch the name parameter
    // let name=searchParams.get('name')
    // now let see whether we can catch the id or not
    // return NextResponse.json({msg:id,city,name})
    // output is 100
    
    
    
    // we can return a json response from the built in 
    // property NextResponse to get the message "i am get"
    
//     return NextResponse.json({msg:"I am get"})
// }


// POST
// export async function POST(req,res){
// Let's catch the request body then all the information of the 
// request will be stored here in the variable 'reqBody'
  // const reqBody=await req.json()
// now from this reqBody i show any property 
//    return NextResponse.json({msg:reqBody['name']})
//    return NextResponse.json(reqBody)
    // we can return a json response from the built in 
    // property NextResponse to get the message "i am post"

    // return NextResponse.json({msg:"I am post"})

// }