import { getAuth } from "@/lib/auth";
import { NextRequest } from "next/server";


async function handleRequest(request: NextRequest) {
  const auth = await getAuth();
  return auth.handler(request);
}

export async function GET(request: NextRequest) {
  return handleRequest(request);
}

export async function POST(request: NextRequest) {
  return handleRequest(request);
}

export async function PUT(request: NextRequest) {
  return handleRequest(request);
}

export async function DELETE(request: NextRequest) {
  return handleRequest(request);
}