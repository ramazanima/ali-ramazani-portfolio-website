'use client'
import React, { useState, useEffect } from 'react';

type Props = {
    words: Array<String>
    interval: number
}

const WordLooper = ({ words, interval }: Props) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, interval);

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [words, interval]);

    return <div>{words[currentWordIndex]}</div>;
};

export default WordLooper;