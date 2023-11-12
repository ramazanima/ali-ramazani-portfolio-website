import { getAllCategoriesAction, getAllProjectsAction } from '@/app/_actions';
import { CategoryType, ProjectType } from '../../../../types';
import { AddProjectCard } from './add-project-card';
import { getProjects } from '@/lib/projects-db';
import { getCategories } from '@/lib/categories-db';

export const ProjectsList = async() => {

  const { projects, } = await getProjects();
  const { categories, } = await getCategories();
  return (
    <div className='col-span-12 md:col-span-7 '>
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="text-lg font-bold">Add Projects</p>
      <AddProjectCard categories={categories as CategoryType[]}/>
      <div className='flex flex-col gap-2'>
      <p className="text-lg font-bold">Projects List</p>
        {projects?.map((project:any)=>
        {
          return(
            <AddProjectCard key={project?._id} project={project} categories={categories as CategoryType[]}/>
          )
        })}
      </div>

        
    </div>
  )
}
