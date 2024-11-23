import enrollModel from "../models/EnrollStudentSchema.js";

//create
export const enrolledStudents=async(req,res)=>{
    try {
      const { practicalId , studentId}= req.body;

      //object
      const enroll = new enrollModel({
        practicalId,
        studentId,
      })
      const savedenroll = await enroll.save();
      console.log(savedenroll);

      const updatepractical = await enrollModel.findByIdAndUpdate(
        practicalId,
        { $push: { enrolledStudents : savedenroll._id }},
        { new: true}
      )
      .populate("enroll")
      .exec();

      res.json({
        enroll,
        message: "Successfully enrolled in Practicals"
      })
    } catch (error) {
      res.json({
        error:"Cannot enrolled in Practicals"
      })
      console.log(error)
    }
  }

//get
  export const getEnrolledStudents =async(req,res)=>{
    try {
      const getenrollstudents=await enrollModel.find();
      res.json({
        getenrollstudents
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }