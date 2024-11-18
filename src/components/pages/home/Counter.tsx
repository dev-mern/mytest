'use client'

import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/redux/slices/counter";
import { useAppDispatch, useAppSelector } from "@/redux/storeHook";

const Counter = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch();

    const handleuserFetch = async()=>{
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Button onClick={()=>dispatch(increment())}>Count + {count}</Button>
            <Button onClick={()=>dispatch(decrement())}>Count -  {count}</Button>
            <Button onClick={handleuserFetch}>Fetch users</Button>
        </div>
    );
};

export default Counter;