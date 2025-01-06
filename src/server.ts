import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {}) // mongoose ni connect methodi mongodb bilan connection qilib beryapti
  .then((data) => {
    // async bo'lganligi uchun then catch dan foydalanilyapti
    // TCP1 qurilyapti
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.info(`The server is running successfully on port: ${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log("ERROR on connection MongoDB", err));
