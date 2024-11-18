import { AxiosError, AxiosRequestConfig } from "axios"
import { AxiosInstance } from "./axiosInstance"
import { BaseQueryFn } from "@reduxjs/toolkit/query"

type TBaseQuery = {
    baseUrl: string
}
type TBaseQueryOption = {
    url: string
    method?: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
    headers?: AxiosRequestConfig['headers']
    // meta?: TMeta,
    contentType?: string,
  }

export const AxiosNextBit = ({baseUrl}:TBaseQuery):BaseQueryFn<TBaseQueryOption,unknown,unknown> =>{
    return async function({ url, method, data, params, headers, contentType }){
        try {
            const result = await AxiosInstance({
                url: baseUrl + url,
                method,
                data,
                params,
                headers:{
                  "Content-Type": contentType || "application/json"
                },
              })
              return result;
        } catch (error) {
            const err = error as AxiosError
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        }
    }
}