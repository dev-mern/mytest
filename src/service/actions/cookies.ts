'use server';
import { cookies } from "next/headers";

export const setAccessToken = (keyName:string,token:string) =>{
    cookies().set(keyName,token)
}
export const getAccessToken = (keyName:string) =>{
    const token = cookies().get(keyName)?.value;
    console.log({token});
    return token
}