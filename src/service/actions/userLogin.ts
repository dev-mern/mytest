"use server"

import { cookies } from "next/headers";

export const userLogin = async(payload:any) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,{
        // cache:"no-store",  // always clean cache for data insert
        credentials: "include",
        method:"POST",
        headers:{'Content-Type':"application/json"},
        body: JSON.stringify(payload)
    })

    const result = await response.json();
    if (result.data.accessToken) {
        // set token to ckkies
        cookies().set('accessToken', result.data.accessToken);
     }

    return result;

};

export default userLogin;