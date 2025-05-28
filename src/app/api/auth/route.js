import { cookies } from 'next/headers'
import {verifyToken} from '../../lib/auth';
import { NextResponse } from "next/server";
export async function GET() {
  const tokenAwait = await cookies();
  const token = tokenAwait.get('authToken')?.value;
  console.log("TOKEN EXIST",token)
  if(token){
  console.log("MYTOKEN",token)
  const user = verifyToken(token)
  return NextResponse.json(user);
  }else{
    return NextResponse.json({status:401});
  }
  
}