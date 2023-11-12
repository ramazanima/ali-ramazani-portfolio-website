"use client"
import React, { useState, useLayoutEffect } from 'react'
import { ModalLayout } from './generic-modal'
import { ProjectType } from '../../types'
import Image from 'next/image'

type Props = {
    project: ProjectType | null
    setProject:any
}

export const Content = ({ project,setProject }: Props) => {
    const [open, setOpen] = useState(false)
    const deliverables = project?.deliverables?.trim()?.split(',')

    useLayoutEffect(() => {
        if (!project) {
            return setOpen(false)
        }
        return setOpen(true)
    }, [project])

    useLayoutEffect(() => {
        if (!open) {
            return setProject(null)
        }
    }, [open])

    if (!project) return null
    return (
        <ModalLayout mainStyles='h-full max-w-5xl' open={open} setOpen={setOpen}>
            <Image
                height={1080}
                width={1920}
                src={project?.images?.[0]?.image}
                alt={project?.title}
                className='w-full h-64 md:h-96'
            />
            <div className='p-10'>

                <div className="pb-5 md:p-5 text-xl md:text-2xl font-bold leading-6 text-tertiary">
                    {project.title}
                </div>
                <div className='w-full grid grid-cols-12 gap-5 '>
                    <div className='col-span-12 md:col-span-9 text-tertiary opacity-70 flex flex-col gap-4 text-lg'>
                        <p className='text-justify tracking-tight'>{project.para1}</p>
                        <p className='text-justify tracking-tight'>{project.para2}</p>
                    </div>
                    <div className='col-span-12 md:col-span-3 flex flex-col gap-5'>
                        <div className='flex gap-5 justify-start md:justify-between'>
                            <p className='font-bold text-lg text-tertiary'>Role</p>
                            <p className='font-bold text-sm text-secondary bg-white px-3 py-1 rounded-2xl shadow-sm shadow-secondary'>{project.role}</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-5 justify-start md:justify-between'>
                            <p className='font-bold text-lg text-tertiary'>Deliverables</p>
                            <div className='flex flex-row flex-wrap md:flex-col gap-3'>
                                {deliverables?.map((each) => {
                                    return (<p key={each} className='font-bold text-base text-secondary'>{each}</p>)
                                }
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </ModalLayout>
    )
}
