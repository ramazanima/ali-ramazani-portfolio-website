'use client'
import { createCategoryAction } from '@/app/_actions'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const AddCategoryCard = () => {
    const router=useRouter()
    const [title, setTitle] = useState('')
    const [loading, setLoading] = useState(false)

    const handleClick=async()=>{
        if (!title.length) return
        setLoading(true)
       await createCategoryAction({title})
   
       setLoading(false)
       setTitle('')
       router.refresh()
    }
    const handleChange=(value:string)=>{
        setTitle(value)
    }

    return (
        <div className='flex w-full'>
            <input className='flex-grow' value={title} onChange={(e) =>handleChange(e.target.value) } />
            <button className={`bg-primary text-tertiary px-2 py-3 ${loading?'bg-gray-600':''}`} disabled={loading} onClick={handleClick}>Create</button>
        </div>
    )
}
