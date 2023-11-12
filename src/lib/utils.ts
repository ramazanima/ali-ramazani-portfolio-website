import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { AcceptedFileTypes } from "../../types";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export function stringToObjectId(id: string): mongoose.Types.ObjectId | null {
  if (mongoose.Types.ObjectId.isValid(id)) {
    return new mongoose.Types.ObjectId(id);
  } else {
    return null;
  }
}

export const isAcceptedFileType = (fileType: AcceptedFileTypes): boolean => {
  return Object.values(AcceptedFileTypes).includes(fileType);
};

export const forceRevalidate = (request: NextRequest) => {
  const path = request.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);
};

export function createErrorResponse(
  message: string,
  statusCode: number
): NextResponse {
  const errorResponse = {
    status: statusCode >= 500 ? "error" : "fail",
    message,
  };

  return new NextResponse(JSON.stringify(errorResponse), {
    status: statusCode,
    headers: { "Content-Type": "application/json" },
  });
}
