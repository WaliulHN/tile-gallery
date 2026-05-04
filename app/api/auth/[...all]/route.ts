import { NextRequest } from "next/server";
import { getAuth } from "@/lib/auth";

const handler = async (request: NextRequest) => {
  const auth = await getAuth();
  return auth.handler(request);
};

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };