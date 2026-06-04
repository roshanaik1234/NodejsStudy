// import express from "express";
// import cors from "cors";
// import { connectDB, getDB } from "./db.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// async function startServer() {
//   try {
//     await connectDB();

//     app.post("/submit", async (req, res) => {
//       try {
//         const db = getDB();
//         const result = await db.collection("User").insertOne(req.body);

//         res.status(201).json({
//           message: "Data Saved",
//           result
//         });
//       } catch (err) {
//         res.status(500).json({ error: err.message });
//       }
//     });

//     app.get("/users", async (req, res) => {
//       try {
//         const db = getDB();
//         const users = await db.collection("User Details").find().toArray();

//         res.json(users);
//       } catch (err) {
//         res.status(500).json({ error: err.message });
//       }
//     });

//     app.listen(3002, () => {
//       console.log("Server running on port 3002");
//     });
//   } catch (err) {
//     console.error("Failed to connect to MongoDB:", err);
//   }
// }

// startServer();


import express from "express";
import cors from "cors";
import { connectDB, getDB } from "./db.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
  try {
    const db = getDB();
    const result = await db.collection("User").insertOne(req.body);
    res.status(201).json({
      message: "Data Saved",
      result
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const db = getDB();
    const users = await db.collection("User Details").find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

async function startServer() {
  try {
    await connectDB();
    app.listen(3002, () => {
      console.log("Server running on port 3002");
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  } finally {
    process.on("SIGINT", async () => {
      await getDB().client.close();
      console.log("MongoDB connection closed");
      process.exit(0);
    });
  } 
}
 
startServer();

