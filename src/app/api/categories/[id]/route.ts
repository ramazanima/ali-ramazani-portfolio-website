import connectDB from "@/lib/connect-db";
import Category from "@/models/Categories";
import { NextRequest, NextResponse } from "next/server";
interface Params {
  params: any;
}

export async function PUT(request:NextRequest, { params }:Params) {
    const { id } = params;
    const { newTitle: title } = await request.json();
    await connectDB();
    const res= await Category.findByIdAndUpdate(id, { title },{new:true});
    return NextResponse.json({ message: "Category updated",updatedCategory:res }, { status: 200 });
  }
  export async function DELETE(request:NextRequest, { params }:Params) {
    const { id } = params;
    await connectDB();
    const topic = await Category.deleteOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
  }

  export const fetchCache = 'force-no-store'
  export const revalidate = 0;