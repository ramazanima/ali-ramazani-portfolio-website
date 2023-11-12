import { createCategory, getCategories } from "@/lib/categories-db";
import connectDB from "@/lib/connect-db"
import { forceRevalidate } from "@/lib/utils";
import Category from "@/models/Categories"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { title } = await request.json()
    await connectDB();

    const category = await Category.create({ title }, { new: true });


    return NextResponse.json({ message: "Category created", category }, { status: 201 })
  } catch (error) {
    return { error };
  }

}

export async function GET(request: NextRequest) {
  forceRevalidate(request)
  const { categories } = await getCategories();
  return NextResponse.json({ categories }, { status: 200 });
}

export const fetchCache = 'force-no-store'
export const revalidate = 0;