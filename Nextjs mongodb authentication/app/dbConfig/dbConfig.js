import mongoose from "mongoose";

let isConnected;

export async function connectDatabase() {
  //checks existing database connection
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    //Connect to database
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "Users",
    };
    await mongoose.connect(process.env.MONGO_URI, options);
    isConnected = true;
    console.log("Mongodb connected successfully!");
  } catch (err) {
    console.log("Mongodb connection error", err);
  }
}

/*
export async function disconnectDatabase() {
  await mongoose
    .disconnect()
    .then(() => console.log("Database disconnected!"))
    .catch((err) => console.log(err));
}
*/
