'use client'
import { createProjectAction, deleteProjectAction, updateProjectAction } from '@/app/_actions'
import { MinusCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { CategoryType, ImageType, ProjectType, ProjectTypeSave } from '../../../../types'
import { AddImage } from './add-image'

type Props = {
    categories: CategoryType[]
    project?: ProjectType
}

const defaultProjectState = {
    title: '',
    para1: '',
    para2: '',
    role: '',
    deliverables: '',
    category: ''
}
export const AddProjectCard = ({ categories, project: currentProject }: Props) => {
    const router = useRouter()
    const [project, setProject] = useState(
        currentProject || defaultProjectState
    )
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [shouldUpdate, setShouldUpdate] = useState(false)

    const [imagesToUpload, setImagesToUpload] = useState<Array<ImageType>>(currentProject?.images || [])

    const handleClick = async () => {
        setError('')
        if (!project.title) return setError('Please enter title')
        if (!project.para1) return setError('Please enter para1')
        if (!project.para2) return setError('Please enter para2')
        if (!project.role) return setError('Please enter role')
        if (!project.deliverables) return setError('Please enter deliverables')
        if (!project?.deliverables?.split(',').length) return setError('Please enter comma separated deliverables')
        if (!imagesToUpload.length) return setError('Please select at least one image')
        if (!project.category) return setError('Please attach a category')
        setLoading(true)
        try {
            const preparedData = { ...project, images: imagesToUpload }

            if (currentProject?._id) {
                await updateProjectAction(preparedData as ProjectTypeSave)
                setShouldUpdate(false)
            }
            else {

                await createProjectAction(preparedData as ProjectTypeSave)
                setProject(defaultProjectState)
                setImagesToUpload([])
            }

        }
        catch (err) {
            return setError('Issue while converting images')
        }
        setLoading(false)
        router.refresh()
    }
    const handleClickDelete = async () => {
        setLoading(true)
        await deleteProjectAction({ id: currentProject?._id as string })
        setLoading(false)
        router.refresh()
    }
    const handleImageRemove = async (remove: ImageType) => {
        const filteredImages = imagesToUpload?.filter((each) => each._id !== remove?._id)
        setShouldUpdate(true)
        setImagesToUpload(filteredImages)
    }

    const handleChange = (target: string, value: string) => {
        if (currentProject?._id) {
            setShouldUpdate(true)
        }
        setProject({ ...project, [target]: value })
    }

    return (
        <div className='flex flex-col'>
            <p className='font-bold text-lg my-3'>{`PROJECT ${currentProject?.title}`}</p>
            <div className='flex flex-col md:flex-row gap-2'>
                <div className='flex flex-col w-full'>

                    <label>Title</label>
                    <input
                        name="title"
                        value={project.title}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                </div>
                <div className='flex flex-col w-full md:w-fit'>
                    <label>Role</label>
                    <input
                        name="role"
                        value={project.role}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-2'>
                <div className='flex flex-col w-full'>
                    <label>Deliverables (Comma separated)</label>
                    <input
                        name="deliverables"
                        value={project.deliverables}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                </div>
                <div className='flex flex-col w-full md:w-fit'>
                    <label>Category</label>
                    {typeof (project.category) === "string" &&
                        <select name="category" id="dropdown" value={project.category} onChange={(e) => handleChange(e.target.name, e.target.value)}>
                            <option value={'none'}>None selected</option>
                            {categories?.map((each) =>
                                <option key={each._id} value={each._id}>{each.title}</option>)}


                        </select>
                    }
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-2'></div>

            <label>Paragraph 1</label>
            <textarea
                name="para1"
                value={project.para1}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <label>Paragraph 2</label>
            <textarea
                name="para2"
                value={project.para2}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <AddImage imagesToUpload={imagesToUpload} setImagesToUpload={setImagesToUpload} setError={setError} setLoading={setLoading} setShouldUpdate={setShouldUpdate} />
            <p>Selected Images Preview:</p>
            <div className='flex gap-4 justify-start'>

                {
                    imagesToUpload.map((each) => {
                        return (
                            <div key={each.name} className='flex gap-2 w-fit'>
                                <Image
                                    height={1080}
                                    width={1920}
                                    src={each.image}
                                    alt="Selected Preview"
                                    className='h-10 w-12'
                                />
                                <button onClick={() => handleImageRemove(each)}><MinusCircleIcon className='h-6 w-6' /></button>
                            </div>
                        )
                    })
                }

            </div>
            {error?.length ? <p className='text-red-500 font-bold'>{error}</p> : null}
            <div className='flex gap-3 w-full'>
                {(!currentProject?._id || shouldUpdate) && <button
                    className={`w-full mt-2 bg-primary text-tertiary px-2 py-3 ${loading ? 'bg-gray-600' : ''}`}
                    disabled={loading}
                    onClick={handleClick}>{!currentProject?._id ? 'Create' : 'Update'}
                </button>}

                {currentProject?._id &&
                    <button className={`w-full mt-2 bg-red-900 text-tertiary px-2 py-3 ${loading ? 'bg-gray-600' : ''}`}
                        disabled={loading}
                        onClick={handleClickDelete}>
                        Delete
                    </button>}
            </div>
        </div>
    )
}
