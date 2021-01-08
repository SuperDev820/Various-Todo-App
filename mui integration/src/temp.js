import React, { useState, useRef, useEffect } from "react";

function Temp() {
    const [title, setTitle] = useState("default title");
    const titleRef = useRef();
    useEffect(() => {
        console.log("useEffect");
        document.title = title;
    })
    useEffect(() => {
        console.log("useEffect local storage");
        const persistedTitle = localStorage.getItem("title");
        setTitle(persistedTitle || []);
    });
    console.log("render");
    const handleClick = () => setTitle(titleRef.current.value);
    return (
        <div>
            <input ref={titleRef} />
            <button onClick={handleClick}>change title</button>
        </div>
    );
}

export default Temp;