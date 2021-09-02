import { createContext, useEffect, useState } from "react";
import { GetImage, GetImageById } from "../Adapters/GetImage";
export const AppContext = createContext(null);
export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;


export default function Context(props) {
    const [data, setData] = useState({});
    useEffect(() => {
        GetImage("mountain", "photo", setData, "&order=popular");
    }, [])
    return (
        <Provider value={{
            data,
            setData,
            GetImage,
            GetImageById
        }}>
            {props.children}
        </Provider>
    )
}