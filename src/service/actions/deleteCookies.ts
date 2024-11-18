'use server';

import { cookies } from 'next/headers';

export const deleteCookies = (keys: string[]) => {
   keys.forEach((key) => {
      cookies().delete(key);
   });
};
export const setTokenInCookies = (token: string) => {
   cookies().set("accessToken",token,{httpOnly: true,sameSite:"lax",maxAge:1*24*60*60})
};