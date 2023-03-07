import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Timer} from './components/Timer/Timer';
import {InputText} from "./components/InputText/InputText";

function App() {
    const [showTimer, setShowTimer] = useState(false);

    const handleClick = () => setShowTimer(!showTimer);
    return (
        <>
            <button onClick={() => handleClick()}>{showTimer ? 'Hide timer' : 'show timer'}</button>
            {showTimer && <Timer initialValue={10}/>}
            <div>
                <InputText/>
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
