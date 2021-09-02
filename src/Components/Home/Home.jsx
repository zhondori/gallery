import React, { useContext, useEffect } from "react";
import Field from "./Field";
import Content from "./Content";
import { AppContext } from "../../Context/Context";
import Footer from "../Footer/Footer";

export default function Home() {
    const { GetImage, setData } = useContext(AppContext);
    useEffect(() => {
        GetImage("", "photo", setData);
    }, [setData, GetImage])
    return (
        <div className="home">
           <Field />
           <Content />
           <Footer />
        </div>
    );
};