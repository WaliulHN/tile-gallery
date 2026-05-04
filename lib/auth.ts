import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

let authInstance: any = null;
let dbPromise: Promise<any> | null = null;

// 1. Lazy Database Connection
async function getDb() {
  if (dbPromise) return dbPromise;
  
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  const client = new MongoClient(uri);
  dbPromise = client.connect().then(c => c.db());
  return dbPromise;
}


export async function getAuth() {
  if (authInstance) return authInstance;

  const db = await getDb();
  
  authInstance = betterAuth({
    database: mongodbAdapter(db),
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

  return authInstance;
}