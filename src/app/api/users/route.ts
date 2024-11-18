import { NextResponse } from "next/server";
import { db } from "../db";


export const GET = async (request: Request) => {
    try {
        const token = request.headers.get("authorization")
      const allUsers = db.users;
      return new NextResponse(JSON.stringify({users:allUsers,token}), { status: 200 });
    } catch (error: any) {
      return new NextResponse("Error in fetching users" + error.message, {
        status: 500,
      });
    }
  };
export const POST = async (request: Request) => {
    try {
        const newUser = await request.json();
        db.users.push({...newUser,id:db.users.length})
      const allUsers = db.users;
      return new NextResponse(JSON.stringify(allUsers), { status: 201 });
    } catch (error: any) {
      return new NextResponse("Error in fetching users" + error.message, {
        status: 500,
      });
    }
  };
