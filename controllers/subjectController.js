import subjectModel from "../models/SubjectSchema.js";
import userModel from "../models/UserSchema.js";

//create
export const createSubject=async (req, res) => {
    try {
      const { name, code, email } = req.body;
      const userinfo= await userModel.findOne({ email });
      console.log("User info:", userinfo);
      
      //object
      const subjectObj = new subjectModel({
        name,
        code,
        email
      });
  
      const savedsubjectObj = await subjectObj.save();
  
      res.json({
        savedsubjectObj,
        message: "Subject created successfully"
      });
  
    } catch (error) {
        console.log(error);
        
      res.json({
        error: "Error occured",
      });
  
    }
  };

//get
  export const getAllSubject =async(req,res)=>{
    try {
      const getsubjects=await subjectModel.find();
      res.json({
        getsubjects
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }