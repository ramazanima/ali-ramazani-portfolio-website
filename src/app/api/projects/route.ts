import { createProject, getProjects } from "@/lib/projects-db";
import connectDB from "@/lib/connect-db"
import Project from "@/models/Projects"
import { NextRequest, NextResponse } from "next/server"
import { forceRevalidate } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    const { title, para1, para2, role, deliverables, images, category } = await request.json()
    await connectDB();

    const project = await Project.create({ title, para1, para2, role, deliverables, images, category }, { new: true });


    return NextResponse.json({ message: "Project created", project }, { status: 201 })
  } catch (error) {
    return { error };
  }

}

export async function GET(request: NextRequest) {
  forceRevalidate(request)
  const { projects } = await getProjects();
  return NextResponse.json({ projects }, { status: 200 });
}

export const fetchCache = 'force-no-store'
export const revalidate = 0;