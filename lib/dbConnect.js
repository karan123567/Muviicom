import mongoose from "mongoose";

const connection = {}; // store the connection state

async function dbConnect() {
  if (connection.isConnected) {
    console.log("✅ Already connected to database.");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("✅ Database connected successfully.");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // stop server if DB fails
  }
}

export default dbConnect;
