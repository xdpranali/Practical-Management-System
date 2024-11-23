import User from "../models/UserSchema.js"

//create admin 
export const createAdmin=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      //object
      const user = new User({
        name,
        email,
        password,
        role: "Admin",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "Admin created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

//create teacher
  export const createTeacher=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      //object
      const user = new User({
        name,
        email,
        password,
        role: "Teacher",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "Teacher created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };


  //create student
  export const createStudent=async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      //object
      const user = new User({
        name,
        email,
        password,
        role: "Student",
      });
  
      const savedUser = await user.save();
  
      res.json({
        savedUser,
        message: "Student created successfully"
      });
  
    } catch (error) {
      res.json({
        error: "Error occured",
      });
  
      console.log(error)
    }
  };

//get getAllUsers
  export const getAllUsers=async(req,res)=>{
    try {
      const getusers=await User.find()
      res.json({
        getusers
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }


//get admin
  export const getAllAdmin=async(req,res)=>{
    try {
      const getadmin=await User.find({role:"Admin"})
      res.json({
        getadmin
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }


  //get teacher
  export const getAllTeacher=async(req,res)=>{
    try {
      const getteacher=await User.find({role:"Teacher"})
      res.json({
        getteacher
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }


   //get student
   export const getAllStudent=async(req,res)=>{
    try {
      const getstudent=await User.find({role:"Student"})
      res.json({
        getstudent
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }