import React, { useState } from 'react'
import PopupContent from './PopupContent';

const CopyInput = () => {

    const [input, setInput] = useState('');
    const [copied, setCopied] = useState(false);
    
    const clickHandler = ()=>{
            navigator.clipboard.writeText(input).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={clickHandler}>Copy</button>

            <PopupContent copied={copied} />
        </div>
    )
}

export default CopyInput