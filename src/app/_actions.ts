import axios from "axios";
import { ProjectType, ProjectTypeSave } from "../../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getAllCategoriesAction = async () => {
  try {
    const response = await axios.get('/api/categories', {
      headers: {
        'Cache-Control': 'no-store',
      },
      params: {
        next: JSON.stringify({ revalidate: 0, tags: ["categories"] }),
      },
    });

    return response.data;
  } catch (error) {
    //console.log("Error loading categories: ", error);
    return { categories: null };
  }
};

export const createCategoryAction=async({title}:{title:string})=>{
  try {
      const res = await fetch(`/api/categories`, {
        method:'POST',
        cache: "no-store",
        next: { revalidate: 0 },
        body: JSON.stringify({ title })
      });
      if (!res.ok) {
        throw new Error("Failed to create Category");
      }
  
      return res.json();
    } catch (error) {
      //console.log("Error loading Category: ", error);
    }
}

export const updateCategoryAction=async({newTitle,id}:{newTitle:string,id:string})=>{
    try {
        const res = await fetch(`/api/categories/${id}`, {
          method:'PUT',
          cache: "no-store",
          next: { revalidate: 0 },
          body: JSON.stringify({ newTitle })
        });
    
        if (!res.ok) {
          throw new Error("Failed to update Category");
        }
    
        return res.json();
      } catch (error) {
        //console.log("Error loading Category: ", error);
      }
}

export const deleteCategoryAction=async({id}:{id:string})=>{
  try {
      const res = await fetch(`/api/categories/${id}`, {
        method:'DELETE',
        cache: "no-store",
        next: { revalidate: 0 },
      });
  
      if (!res.ok) {
        throw new Error("Failed to update Category");
      }
  
      return res.json();
    } catch (error) {
      //console.log("Error loading Category: ", error);
    }
}

export const getAllProjectsAction=async()=>{
  try {
      const res = await fetch(`/api/projects`, {
        cache: "no-store",
        next: { revalidate: 0 ,tags:["projects"]},
        
      });
  
      if (!res.ok) {
        return {projects:null}
      }
  
      return res.json();
    } catch (error) {
      //console.log("Error loading projects: ", error);
      return {projects:null}
    }
}

export const createProjectAction=async(project:ProjectTypeSave)=>{
  try {
   
    
    //console.log({project})
      const res = await fetch(`/api/projects`, {
        method:'POST',
        cache: "no-store",
        next: { revalidate: 0 },
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project)
      });
  
      if (!res.ok) {
        throw new Error("Failed to create Project");
      }
  
      return res.json();
    } catch (error) {
      //console.log("Error loading Project: ", error);
    }
}

export const updateProjectAction=async({ _id,title,para1,para2,role,deliverables,category,images}:ProjectTypeSave)=>{
  try {
      const res = await fetch(`/api/projects/${_id}`, {
        method:'PUT',
        cache: "no-store",
        next: { revalidate: 0 },
        body: JSON.stringify({  title,para1,para2,role,deliverables,category,images })
      });
  
      if (!res.ok) {
        throw new Error("Failed to update Project");
      }
  
      return res.json();
    } catch (error) {
      //console.log("Error loading Project: ", error);
    }
}

export const deleteProjectAction=async({id}:{id:string})=>{
try {
    const res = await fetch(`/api/projects/${id}`, {
      method:'DELETE',
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error("Failed to update Project");
    }

    return res.json();
  } catch (error) {
    //console.log("Error loading Project: ", error);
  }
}
export const uploadImage=async(file:File)=>{
  try{
    const cloudName=process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
    const preset=process.env.NEXT_PUBLIC_CLOUDINARY_PRESET
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset as string);
  
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method:'POST',
      cache: "no-store",
      next: { revalidate: 0 },
      body: formData,
    });
    
    if (!res.ok) {
      throw new Error("Failed to update Project");
    }

    return res.json();
  }catch (error) {
    //console.log("Error loading Project: ", error);
  }

}