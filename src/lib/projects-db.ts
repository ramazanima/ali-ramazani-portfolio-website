
import Project from "@/models/Projects";
import connectDB from "./connect-db";
import { stringToObjectId } from "./utils";

interface ProjectFilter {
  page?: number;
  limit?: number;
}

export async function getProjects(filter: ProjectFilter = {},ref:string='') {
  try {
    await connectDB();

    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;

    const projects = await Project.find().skip(skip).limit(limit).populate(ref).lean().exec();
    const results = projects.length;

    return {
      projects: projects,
      page,
      limit,
      results,
    };
  } catch (error) {
    return { error };
  }
}

export async function createProject(title: string) {
  try {
    await connectDB();

    const project = await Project.create({ title });
    return {
      project,
    };
  } catch (error) {
    return { error };
  }
}

export async function getProject(id: string) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Project not found" };
    }

    const project = await Project.findById(parsedId).lean().exec();
    if (project) {
      return {
        project,
      };
    } else {
      return { error: "Project not found" };
    }
  } catch (error) {
    return { error };
  }
}

export async function updateProject(
  id: string,
  { title, }: { title?: string; }
) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Project not found" };
    }

    const project = await Project.findByIdAndUpdate(
      parsedId,
      { title },
      { new: true }
    )
      .lean()
      .exec();

    if (project) {
      return {
        project,
      };
    } else {
      return { error: "Project not found" };
    }
  } catch (error) {
    return { error };
  }
}

export async function deleteProject(id: string) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Project not found" };
    }

    const project = await Project.findByIdAndDelete(parsedId).exec();

    if (project) {
      return {};
    } else {
      return { error: "Project not found" };
    }
  } catch (error) {
    return { error };
  }
}
