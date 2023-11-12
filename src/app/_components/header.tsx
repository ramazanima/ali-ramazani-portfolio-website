import { IconWrapper } from "@/components/icon-wrapper";
import { OWNER_NAME } from "@/lib/constants";
import { FacebookIcon, GitHubIcon, } from "@/lib/svg-icons";
import Image from "next/image";
import Link from "next/link";
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'



export const Header = () => {


    return (
        <div className="flex justify-between">

            <div className="flex gap-3 justify-start items-center">
                <Image src={'/logo.png'} height={40} width={40} alt="Logo" />
                <p className="text-2xl font-bold text-tertiary">Dr. {OWNER_NAME}</p>

            </div>
            <div className="hidden md:block">
                <div className='flex space-x-5 items-center text-primary'>
                    <IconWrapper classes='p-2 hover:bg-white rounded-xl transition-colors duration-500' href='https://google.com' target='_blank' >
                        <BiLogoLinkedin className="w-6 h-6 " />
                    </IconWrapper>
                    <IconWrapper classes='p-2 hover:bg-white rounded-xl transition-colors duration-500' href='https://google.com' target='_blank'>
                        <BsGithub className="w-6 h-6" />
                    </IconWrapper>
                    <IconWrapper classes='p-2 hover:bg-white rounded-xl transition-colors duration-500' href='https://google.com' target='_blank'>
                        <FaFacebookF className="w-6 h-6" />
                    </IconWrapper>
                    <Link className='text-white text-lg font-bold  flex items-center justify-center px-5 py-2 bg-secondary hover:bg-primary hover:text-white transition-colors duration-500 rounded-full' href='https://google.com' target='_blank'>
                        Let&apos;s Connect
                        <span>{' '}→</span>
                    </Link>

                </div>
            </div>
        </div>
    );
}
