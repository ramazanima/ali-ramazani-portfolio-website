import Link from 'next/link';
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
    classes: string
    href: string;
    target: string
}

export const IconWrapper = ({ children, classes, href, target }: Props) => {
    return (
        <Link href={href} target={target} className={classes}>{children}</Link>
    )
}
