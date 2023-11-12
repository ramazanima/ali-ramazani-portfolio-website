'use client'
import React, { useState } from 'react'
import { CategoryType } from '../../../../types'
import { deleteCategoryAction, updateCategoryAction } from '@/app/_actions'
import { useRouter } from 'next/navigation'

type Props = {
    category: CategoryType
}

export const CategoryCard = ({ category }: Props) => {
    const router=useRouter()
    const [title, setTitle] = useState(category.title)
    const [loading, setLoading] = useState(false)
    const handleClick=async()=>{
        setLoading(true)
       const {updatedCategory}= await updateCategoryAction({newTitle:title,id:category._id})
       setLoading(false)
       router.refresh()
    }

    const handleClickDelete=async()=>{
        setLoading(true)
        await deleteCategoryAction({id:category._id})
       setLoading(false)
       router.refresh()
    }
    
    const handleChange=(value:string)=>{
        setTitle(value)
    }

    return (
        <div className='w-full flex'>
            <input className='flex-grow' value={title} onChange={(e) =>handleChange(e.target.value) } />
            {title !== category.title ? (
                <button className={`bg-primary text-tertiary px-2 py-3 ${loading?'bg-gray-400':''}`} disabled={loading} onClick={handleClick}>Submit</button>
            ) : null}
            <button className={`bg-red-900 text-tertiary px-2 py-3 ${loading?'bg-gray-400':''}`} disabled={loading} onClick={handleClickDelete}>Delete</button>
        </div>
    )
}
