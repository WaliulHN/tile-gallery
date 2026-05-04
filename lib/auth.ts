import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn("MONGODB_URI is not defined - auth will not work");
}

// Create client but don't connect yet
const client = MONGODB_URI ? new MongoClient(MONGODB_URI) : null;

// We'll let better-auth handle the connection
export const auth = betterAuth({
  database: client ? mongodbAdapter(client.db()) : undefined as any,
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  user: {
    additionalFields: {
      photoUrl: { type: "string", required: false, defaultValue: "" },
    },
  },
});