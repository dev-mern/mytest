'use client';



import { Provider } from "react-redux";
import { store } from "@/redux/store";

type TProvders = {
    children: React.ReactNode
}
const Providers = ({children}:TProvders) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default Providers;