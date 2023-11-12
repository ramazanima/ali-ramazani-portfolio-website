'use client'
import { Content } from "@/components/content";
import { useState,useLayoutEffect } from "react";
import { CategoryType, ProjectType } from "../../../types";
import { Projects } from "./projects";

type Props = {
    categories?: CategoryType[]
    projects?:ProjectType[]
}

export default function ProjectsSection({ categories,projects }: Props) {
    const [selectedCategory, setSelectedCategory] = useState<CategoryType | null >(null)
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)
    const [organizedMode, setOrganizedMode] = useState(true)
    const [filteredProjects, setFilteredProjects] = useState<Array<ProjectType>>([])
        
//console.log({selectedProject})
    useLayoutEffect(() => {
        
      const filtered=projects?.filter((each)=>each.category?._id===selectedCategory?._id)
      if(!projects?.length) return setFilteredProjects([])
      if(!selectedCategory) return setFilteredProjects(projects)
      if(!filtered?.length) return setFilteredProjects([])
      setFilteredProjects(filtered)
    
    }, [selectedCategory,projects])
   
    return (
        <Projects >
            <Content  project={selectedProject} setProject={setSelectedProject}/>
               {/* <ButtonCard/> */}
            <Projects.Tabs
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                organizedMode={organizedMode}
                setOrganizedMode={setOrganizedMode}
            />
            {filteredProjects?.length?(

            <Projects.Grid>
                {filteredProjects?.map((project: ProjectType) => (
                    <Projects.Card
                        key={project._id}
                        project={project}
                        organizeMode={organizedMode}
                        setSelectedProject={setSelectedProject}
                         />
                ))}


            </Projects.Grid>
            ):<div className="text-center font-bold text-3xl mt-10">Coming Soon</div>}
        </Projects>

    );
}
