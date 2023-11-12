'use client'
import { useEffect, useState } from 'react';

export const Overlay = () => {
    const overlayDefault = 0.2
    const overlayMax = 0.7
    const blurDefault = 2
    const blurMax = 3
    const [overlayOpacity, setOverlayOpacity] = useState(overlayDefault);
    const [blurAmount, setBlurAmount] = useState(blurDefault);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 200) {
                setBlurAmount(blurMax)
                return setOverlayOpacity(overlayMax);
            }
            setBlurAmount(blurDefault)
            return setOverlayOpacity(overlayDefault);


        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className="overlay"
                style={{
                    backgroundColor: `rgba(8, 56, 99, ${overlayOpacity})`,
                    backdropFilter: `blur(${blurAmount}px)`,
                }}

            />

        </>
    );
};

