import { SectionTitle } from '@/components/section.title'
import React, { ReactNode } from 'react'
type Props = {
    children: ReactNode
}
type ItemProps = {
    role: string
    date: string
    title: string
    desc: string
}
const Item = ({ date, title, desc, role }: ItemProps) => {
    return (
        <li className="mb-10 ml-4 font-bold">
            <div className="absolute w-3 h-3 bg-secondary rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-md leading-none text-gray-400 dark:text-gray-500">{date}</time>
            <h3 className="text-xl text-secondary">{role}</h3>
            <h3 className="text-2xl text-tertiary gradient-text">{title}</h3>
            <p className="text-base font-normal text-tertiary">{desc}</p>
        </li>
    )
}
export const Timeline = ({ children }: Props) => {
    return (
        <>
            <SectionTitle>Work Experience</SectionTitle>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {children}
            </ol>
        </>


    )
}
Timeline.Item = Item
