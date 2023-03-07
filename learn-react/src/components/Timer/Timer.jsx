import { useEffect, useState } from 'react';

function Timer({ initialState }) {
    const [counter, setCounter] = useState(initialState);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevState => prevState + 1);
            console.log('cyk');
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log('unmoount');
        };
    }, []);

    return <div>Counting: {counter}</div>;
}

export { Timer };