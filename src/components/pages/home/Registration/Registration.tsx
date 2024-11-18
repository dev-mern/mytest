"use client"
import { Button } from '@/components/ui/button';
import { AxiosNextBit } from '@/lib/AxiosNextBit';
import { AxiosInstance } from '@/lib/axiosInstance';
import { ZodValidate } from '@/lib/zod/zodParser';
import React from 'react';
import { z } from 'zod';


const eduSchema =z.object({title:z.string(),address: z.object({road: z.number({required_error:"road is required",invalid_type_error:"Road must be number"})})})
const regValidationSchema = z.object({
    name: z.number({required_error:"name is required",invalid_type_error:"name must be string"}),
    edu: z.array(eduSchema,{required_error:"Education is required"}),
})

const myFormValidateSchema = z.object({
    email: z.string().email({message:"Must be a valid email"}),
    password: z.string()
})

const Registration = () => {
    const handleRegister = async() =>{
        const user = {
            name: "ab",
            edu: [{title:123,address:{road:"aabc"}}],
            email: "ab@mail.com",
            username: "ab",
            password: "123456",
            confirm_password: "123456",
            profile: {
                bio: "",
                age: 10
            }
        }
        const fieldData = {
            email:"abc112@gmail.com",
            password:"1233"
        }
        // console.log(user);
        const url = "/api/register";

        try {
            // const validUser = ZodValidate(regValidationSchema,user);
            const validUser = ZodValidate(myFormValidateSchema,fieldData);

            console.log(123,validUser);
            const res = await AxiosInstance.post(url,{
                ...validUser
            })
            console.log(res.data);

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <input type="text" placeholder='email' />
            <input type="text" placeholder='password' />
            <Button onClick={handleRegister}>Register</Button>
        </div>
    );
};

export default Registration;