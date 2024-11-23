import practicalModel from "../models/PracticalSchema.js";
import subjectModel from "../models/SubjectSchema.js";
import userModel from "../models/UserSchema.js";

//create
export const createPractical = async (req, res) => {
    try {
        const { subjectId, email, title, description } = req.body;

        const subject = await subjectModel.findById(subjectId);
        
        if(!subject){
            return res.status(400).json({ message: "Subject is not found"});
        }

        //object
        const practicalObj = new practicalModel({
            subjectId,
            email,
            title,
            description,
        });
    
        const savedpracticalObj = await practicalObj.save();
        
        await subjectModel.findByIdAndUpdate(subjectId, {
            $push: { practicals: savedpracticalObj._id }
        });
    
        res.json({
            savedpracticalObj,
            message: "Practical created successfully"
        });
        
    } catch (error) {
        console.log(error);
        
        res.json({
            error: "Error occured",
        });
    }
}

//get
export const getAllPracticals=async(req,res)=>{
    try {
      const getpracticals=await practicalModel.find()
      .populate('subjectId', 'name code')
      .populate('enrolledStudents', 'name email')
      .exec();
      res.json({
        getpracticals
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch Practicals"
      })
      console.log(error)
    }
  }


  