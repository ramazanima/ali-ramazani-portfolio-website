'use client'
import { ToggleButton } from "@/components/toggle"
import { ReactNode, useState } from "react"
import { CategoryType, ProjectType } from "../../../types"
import { SectionTitle } from "@/components/section.title"
import Image from "next/image"

type Props = {
    children: ReactNode
}
type CardProps = {
    project: ProjectType
    organizeMode: boolean
    setSelectedProject: any
}

type TabsProps = {
    categories?: CategoryType[],
    selectedCategory: CategoryType | null
    setSelectedCategory: any
    organizedMode: boolean
    setOrganizedMode: any
}


const Grid = ({ children }: Props) => {


    return (
        <div className="w-full grid grid-cols-2 gap-16 mt-20">
            {children}
        </div>)
}
const Card = ({ project, organizeMode, setSelectedProject }: CardProps) => {

    const [selectedImage, setSelectedImage] = useState(project.images[0].image)

    if (organizeMode) {
        return (
            <div className="col-span-2 md:col-span-1 rounded-lg">
                <div className="flex gap-2 justify-start items-start">

                    <div className="bg-secondary h-3 w-3 rounded-full mt-2" />
                    <p className="w-[80%] font-bold text-lg mb-4 text-white" >{project.title}</p>
                </div>
                <Image
                    height={1080}
                    width={1920}
                    onClick={() => setSelectedProject(project)}
                    src={selectedImage} alt={project.title}
                    className='h-64 w-full rounded-lg cursor-pointer shadow-xl shadow-primary'


                />
                {
                    project.images.length > 1 ? (
                        <div className="flex gap-3 mt-4">
                            {project.images.map(({ image }) =>
                                <div
                                    onMouseOver={() => setSelectedImage(image)}
                                    key={image}
                                    className={`w-14 h-11 cursor-pointer ${selectedImage === image ? "border-b-2" : ""}`}
                                >
                                    <Image
                                        height={1080}
                                        width={1920}
                                        src={image} alt={project.title}
                                        className='w-full h-full block rounded-sm p-2 hover:scale-105 transition-all'
                                        style={{ maxHeight: 200 }}

                                    />
                                </div>
                            )}
                        </div>
                    ) : null
                }

            </div>)
    }
    return (
        <div className="col-span-2 md:col-span-1">
            <div className="flex gap-2 justify-start items-start">

                <div className="bg-secondary h-3 w-3 rounded-full mt-2" />
                <p className="w-[80%] md:w-[50%] font-bold text-lg mb-4 text-white" >{project.title}</p>
            </div>
            <div className="flex flex-col gap-6 mt-4">
                {project.images.map(({ image }) =>

                    <Image
                        height={1080}
                        width={1920}
                        key={image}
                        onClick={() => setSelectedProject(project)}
                        src={image} alt={project.title}
                        className='h-64 w-full rounded-lg cursor-pointer shadow-xl shadow-primary hover:scale-105 transition-all'


                    />

                )}
            </div>
        </div>)
}
const Tabs = ({ categories, selectedCategory, setSelectedCategory, organizedMode, setOrganizedMode }: TabsProps) => {

    return (
        <div className="flex flex-col-reverse gap-y-3 items-start md:flex-row md:justify-between">
            <div className="flex gap-6 flex-wrap">
                <button
                    onClick={() => setSelectedCategory(null)}
                    className={!selectedCategory ? 'text-white border-b-2' : 'text-gray-400'} >
                    All
                </button>

                {categories?.map(({ title, _id, ...rest }) => (
                    <button
                        onClick={() => setSelectedCategory({ title, _id, ...rest })}
                        className={selectedCategory?._id === _id ? 'text-white border-b-2' : 'text-gray-400'}
                        key={_id}>
                        {title}
                    </button>
                ))}
            </div>
            <div className="flex gap-3 justify-center items-center">
                <p className="text-white text-sm font-bold">Organize Mode</p>
                <ToggleButton
                    onChange={() => setOrganizedMode(!organizedMode)}
                    active={organizedMode} />
            </div>

        </div>
    )
}
export const Projects = ({ children }: Props) => {
    return (
        <div className="text-white mt-[90px] md:mt-10 mb-[90px] relative">
            <SectionTitle>Projects</SectionTitle>
            {children}
        </div>)
}
Projects.Tabs = Tabs
Projects.Grid = Grid
Projects.Card = Card
