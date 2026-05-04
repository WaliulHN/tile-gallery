import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

let authInstance: any = null;
let dbPromise: Promise<any> | null = null;

async function getDb() {
  if (dbPromise) return dbPromise;
  
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("❌ MONGODB_URI is not defined");
    throw new Error("MONGODB_URI is not defined");
  }

  try {
    const client = new MongoClient(uri);
    dbPromise = client.connect().then(c => {
      console.log("✅ MongoDB Connected");
      return c.db();
    });
    return dbPromise;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    throw error;
  }
}

export async function getAuth() {
  if (authInstance) return authInstance;

  try {
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
      // ADD THIS:
      trustedOrigins: ["http://localhost:3000", "https://beautiful-ganache-f0a383.netlify.app"],
    });

    console.log("✅ BetterAuth initialized");
    return authInstance;
  } catch (error) {
    console.error("❌ Auth initialization failed:", error);
    throw error;
  }
}

