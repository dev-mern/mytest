"use client"
import { Button } from '@/components/ui/button';
import { AxiosNextBit } from '@/lib/AxiosNextBit';
import { AxiosInstance } from '@/lib/axiosInstance';
import { setTokenInCookies } from '@/service/actions/deleteCookies';
// import { cookies } from 'next/headers';
import { useRouter } from 'next/navigation';
import React from 'react';

const Login = () => {
    const router = useRouter();
    const handleLogin = async() =>{
        const user = {email:"ab@mail.com",password:"123456"}
        console.log(user);
        const url = "/api/login";

        try {
            const res = await AxiosInstance.post(url,{
                ...user
            })
            console.log(res.data);
            // store token in cookies
            // navigate to dashboard
            // cookies().set("accessToken",res.data.token)
            setTokenInCookies(res.data.token)
            router.push("/dashboard")
        } catch (error) {

            console.log(error);

        }
    }
    return (
        <div>
            <input type="text" placeholder='email' />
            <input type="text" placeholder='password' />
            <Button onClick={handleLogin}>Login</Button>
        </div>
    );
};

export default Login;