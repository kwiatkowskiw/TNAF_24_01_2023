import { useEffect, useRef } from "react";

function InputText() {
    const inputEl = useRef(null);

    useEffect(() => {
       inputEl.current.focus();
    }, []);

    return (
        <>
            <input ref={inputEl}/>
        </>
    );
}

export {InputText}