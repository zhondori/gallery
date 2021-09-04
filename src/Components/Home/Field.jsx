import React, { useRef, useContext, useState } from "react";
import { AppContext } from "../../Context/Context";


const Field = () => {
    const ref = useRef(null);
    const inputRef = useRef(null);
    const context = useContext(AppContext);
    const { GetImage, setData } = context;
    const [ list, setList ] = useState(["nature", "mountain"])
    return (
        <div className="field">
            <h3 className="title">Image Gallery</h3>
            <div className="search-bar">
                <div className="input">
                    <svg onClick={() => GetImage(inputRef.current.value, ref.current.value, setData)} xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="#333333">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" ref={inputRef} placeholder="Search Images" list="search"/>
                    <datalist id="search">
                        {list.map((ls, id) => (
                            <option value={ls} key={id} />
                        ))}
                    </datalist>
                </div>
                <select name="type" id="type" ref={ref}>
                    <option value="all">All</option>
                    <option value="photo">Photo</option>
                    <option value="illustration">illustration</option>
                    <option value="vector">Vector</option>
                </select>
                <button onClick={() => {
                    GetImage(inputRef.current.value, ref.current.value, setData)
                    setList(prev => [...prev, inputRef.current.value])
                }}>Get Image</button>
            </div>
        </div>
    );
};

export default Field;