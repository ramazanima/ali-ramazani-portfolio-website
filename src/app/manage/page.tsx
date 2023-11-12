import { CategoriesList } from "./_components/categories-list";
import { ProjectsList } from "./_components/projects-list";

export default async function Manage() {
    return (
        <div className="grid grid-cols-12 w-full p-2 gap-y-4 md:gap-x-5">
           <CategoriesList/>
           <ProjectsList/>
        </div>
    );
}

export const fetchCache = 'force-no-store'
export const revalidate = 0;