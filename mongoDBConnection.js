import express from "express";
import { MongoClient } from "mongodb";

// Define DB name and MongoDB URL
const dbName = "school"; 
// db name 
const url = "mongodb://localhost:27017";
// MongoDB URL

// Create MongoDB client
const client = new MongoClient(url);

// Create async function for DB connection
async function dbConnection() {
  await client.connect(); // connect to MongoDB
  const db = client.db(dbName); // select the database
  const collection = db.collection("students"); // get collection

  const result = await collection.find().toArray(); // get all data

  console.log(result); // log result
}

// Call connection function
dbConnection();

// Create express app
const app = express();


// ===========second code snippet===========
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

