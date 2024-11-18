import { NextResponse } from "next/server"
import { db } from "../db"

export const POST = async(req:Request) =>{
    const bosy = await req.json()
    const user = db.users.find(el=>el.email === bosy.email)
    console.log(user,bosy);

    if (!user) {
        return new NextResponse(JSON.stringify({data:{user:null,token:null}}),{status:401})
    }

    const token = `jwt-token-for:${user.id}`
    return new NextResponse(JSON.stringify({data:{user,token}}),{status:200})
}