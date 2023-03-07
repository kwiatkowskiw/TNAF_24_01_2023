import {useEffect, useRef, useState} from "react";

function ModalColor() {
    const [showFocus, setShowFocus] = useState(false);
    const inputElement = useRef(null);
    const buttonEl = useRef(null);
    const randomColor = () =>  {
        return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    }

    useEffect(() => {
        if (showFocus) {
            inputElement.current.focus();
        }
    },);

    useEffect(() => {
        setInterval( () => {
            setTimeout(() => {
                buttonEl.current.style.backgroundColor = randomColor();
                buttonEl.current.style.color = randomColor();
            }, 1000)
        })
    }, [])

    const handleClick = () => setShowFocus(!showFocus);

    return (
        <>
            <input ref={inputElement}/>
            <button ref={buttonEl} onClick={() => handleClick()}>
                {showFocus ? 'wylacz focus na input' : 'ustaw focus na input'}
            </button>
        </>
    );
}

export {ModalColor}