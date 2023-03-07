import {useEffect, useState} from "react";

function Timer({initialValue}) {
    const [counter, setCounter] = useState(initialValue);
    const [stopCounting, setStopCounting] = useState(false);

    useEffect(() => {
        if (counter !== 0 && !stopCounting) {
            const timeout = setTimeout(() => {
                setCounter(prevState => prevState - 1);
            }, 1000);

            return () => clearTimeout(timeout);
        }
    });

    return (
        <>
            <div> {counter ? `Pozostało: ${counter}` : 'Koniec czasu!'}</div>
            {counter !== 0 && (
                <>
                    <button onClick={() => setStopCounting(!stopCounting)}>
                        {stopCounting ? 'Wznów odliczanie' : 'Zatrzymaj odliczanie!'}
                    </button>
                    <button onClick={() => setCounter(initialValue)}>Reset</button>
                </>
            )}
        </>
    );
}

export {Timer}