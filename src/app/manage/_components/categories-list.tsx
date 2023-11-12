import { getCategories } from '@/lib/categories-db';
import { AddCategoryCard } from './add-category-card';
import { CategoryCard } from './category-card';

export const CategoriesList = async () => {
  const { categories, } = await getCategories();

  return (
    <div className='col-span-12 md:col-span-5'>
      <p className="text-3xl font-bold my-2">Categories</p>
      <p className="text-lg font-bold">Add Category</p>
      <AddCategoryCard />
      <div className='flex flex-col gap-2 my-2'>
        <p className="text-lg font-bold">Category List</p>

        {categories?.map((category: any) =>
          <CategoryCard key={category._id} category={category} />
        )}
      </div>


    </div>
  )
}
