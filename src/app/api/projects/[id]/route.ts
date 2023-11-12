import connectDB from "@/lib/connect-db";
import Project from "@/models/Projects";
import { NextRequest, NextResponse } from "next/server";
interface Params {
  params: any;
}

export async function PUT(request: NextRequest, { params }: Params) {
  const { id } = params;
  const { title, para1, para2, role, deliverables, images, category, _id, } = await request.json();
  await connectDB();
  const res = await Project.findByIdAndUpdate(id, { title, para1, para2, role, deliverables, images, category, _id, }, { new: true });
  return NextResponse.json({ message: "Project updated", updatedProject: res }, { status: 200 });
}
export async function DELETE(request: NextRequest, { params }: Params) {
  const { id } = params;
  await connectDB();
  const topic = await Project.deleteOne({ _id: id });
  return NextResponse.json({ topic }, { status: 200 });
}

export const fetchCache = 'force-no-store'
export const revalidate = 0;