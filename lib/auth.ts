import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

// Create client
const client = new MongoClient(MONGODB_URI);

// Connect immediately (this is okay in lib files)
let db: any = null;

async function initDb() {
  if (db) return db;
  await client.connect();
  db = client.db();
  console.log("✅ MongoDB Connected");
  return db;
}


initDb().catch(console.error);

export const auth = betterAuth({
  database: mongodbAdapter(client.db()),
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