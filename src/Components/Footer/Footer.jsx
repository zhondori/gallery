import React from "react";

export default function Footer() {
    return (
        <div className={"footer"}>
            <p>&copy; Copyright By <a href="https://github.com/Alisher-Usmonov">Alisher</a> | {new Date().getFullYear() - 1} - {new Date().getFullYear()}</p>
        </div>
    );
};