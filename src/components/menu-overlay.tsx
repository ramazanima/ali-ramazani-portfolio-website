'use client'
import { FacebookIcon, GitHubIcon, LinkedInIcon } from '@/lib/svg-icons';
import Link from 'next/link';
import { useState } from 'react';
import { IconWrapper } from './icon-wrapper';
import MenuIcon from './menu-icon';
import { LocationLight } from './location';

export const MenuOverlay = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className={`md:hidden menu-overlay ${menuOpen ? 'menu-overlay-visible px-4 py-20' : 'translate-y-[1000px]'}`}>
                <div className='flex flex-col items-center justify-between w-full h-full text-[#f4f4f4]'>
                    <div className='flex flex-col justify-center items-center'>

                        <Link className='text-2xl py-10 flex items-center justify-center' href='https://google.com' target='_blank'>
                            Let&apos;s Connect
                            <span>{' '}→</span>
                        </Link>
                        <div className='flex space-x-3'>
                            <IconWrapper classes='w-8' href='https://www.linkedin.com/in/ramazanima/' target='_blank' >
                                <LinkedInIcon />
                            </IconWrapper>
                            <IconWrapper classes='w-8' href='https://github.com/ramazanima' target='_blank'>
                                <GitHubIcon />
                            </IconWrapper>
                            <IconWrapper classes='w-8' href='https://google.com' target='_blank'>
                                <FacebookIcon />
                            </IconWrapper>
                        </div>
                    </div>
                    <LocationLight />

                </div>
            </div>
            <MenuIcon isOpen={menuOpen} onClick={handleMenuClick} />
        </>
    );
};

