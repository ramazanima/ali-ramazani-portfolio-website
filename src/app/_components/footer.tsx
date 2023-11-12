import { IconWrapper } from "@/components/icon-wrapper";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export const Footer = () => {


    return (
        <div className=" flex flex-col gap-5">
            <div className="flex items-center gap-3 text-white text-2xl md:text-4xl">
                <div className="bg-secondary h-3 w-3 rounded-full" />
                <p>
                    Available for Summer 2024
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between">

                <p className="md:w-1/2 text-gray-300 ml-6 font-semibold">
                    I&apos;'m skilled in Python, JavaScript, HTML/CSS, C/C++, Node.js, Express.js.
                </p>
                <div className='flex space-x-5 items-center justify-center text-tertiary'>
                    <IconWrapper classes='p-2 hover:bg-primary rounded-xl transition-colors duration-500' href='https://google.com' target='_blank' >
                        <BiLogoLinkedin className="w-6 h-6 " />
                    </IconWrapper>
                    <IconWrapper classes='p-2 hover:bg-primary rounded-xl transition-colors duration-500' href='https://google.com' target='_blank'>
                        <BsGithub className="w-6 h-6" />
                    </IconWrapper>
                    <IconWrapper classes='p-2 hover:bg-primary rounded-xl transition-colors duration-500' href='https://google.com' target='_blank'>
                        <FaFacebookF className="w-6 h-6" />
                    </IconWrapper>

                </div>
            </div>

        </div>
    );
}
