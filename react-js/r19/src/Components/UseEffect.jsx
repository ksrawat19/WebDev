import React, { useEffect, useState } from 'react';

const UseEffectDemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [isActive, setIsActive] = useState(false);

    // Runs on every render
    useEffect(() => {
    console.log('useEffect with no dependencies (every render)');
    });

    // Runs only once on mount
    useEffect(() => {
    console.log('useEffect with empty array (on mount)');
    document.title = 'Component Mounted';
    }, []);

    // Runs when `count` changes
    useEffect(() => {
    console.log(`useEffect with [count] — count is now ${count}`);
    document.title = `Count: ${count}`;
    }, [count]);

    useEffect(() => {
    if (isActive) {
      console.log('Effect triggered because isActive is true');
    }
    }, [isActive]);

    return (
    <div style={{ padding: '2rem' }}>
        <h2>useEffect Variants</h2>

        <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
        <p>Count: {count}</p>
        </div>

        <div>
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
        />
        <p>Text: {text}</p>
        </div>

        <button onClick={() => setIsActive(prev => !prev)}>
        Toggle Active
      </button>
    </div>
    );
};

export default UseEffectDemo;