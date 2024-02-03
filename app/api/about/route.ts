import { dbConnect } from "@/lib/config";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/dbSchemas/userSchema";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  await dbConnect();
}
