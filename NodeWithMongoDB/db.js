// db.js
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

let db;

export async function connectDB() {
  await client.connect();
  db = client.db("UserMaster"); // use your database name here
  console.log("MongoDB connected");
}

export function getDB() {
  if (!db) {
    throw new Error("Database not connected yet");
  }
  return db;
}
