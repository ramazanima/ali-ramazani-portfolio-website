import React from 'react'

export const SectionTitle = ({ children }: { children: string }) => {
    return (
        <div className='flex gap-3 mb-10 items-center'>
            <div className='h-10 w-2 bg-secondary' />
            <h1 className='font-bold text-3xl md:text-5xl text-tertiary hover:text-secondary'>{children}</h1>
        </div>
    )
}
