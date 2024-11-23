import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    
  },
  code: {
    type: String,
    required: true, 
  }, 
});

const subjectModel = mongoose.model("Subject", subjectSchema);

export default subjectModel;
