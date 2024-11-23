import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/database.js";
import router from "../routes/EnrolledRoute.js";

const app = express();

app.use(express.json());

//mounting
app.use("/api/v1",router);


const PORT = 3000;

app.get("/", (req, res)=>{
  res.json({
    success: true,
    message: "Server Running Successfully"
  })
})

dotenv.config();

//for Connection 
dbConnect();


app.listen(PORT, () => {
    console.log("Server is running at port:", PORT);
  });