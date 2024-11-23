import userModel from "../models/UserSchema.js";

export const isAdmin =  async(req, res, next) => {
    try {
        const { email , role} = req.body;

        const userInfo = await userModel.findOne({ email ,role});

        if(userInfo || role =="Admin"){
            next();
        }
        else{
            res.status(403).json({
            message:"Access Denied, only Admin can access"
        })
        }
    } catch (error) {
        res.json({
            error:"Internal server error"
        })
          console.log(error)
    }
}


export const isTeacher =  async(req, res, next) => {
    try {
        const { email , role } = req.body;
        const userInfo = await userModel.findOne({ email , role });

        if(userInfo || role == "Teacher"){
            return next();
        }
        else{
            return res.json({ message: "Access Denied, Only Teacher can access"})
        }
    } catch (error) {
        res.json({
            error:"Internal server error"
          })
          console.log(error)
    }
}


export const isAuthorized = (req, res, next) => {
    const { role } = req.body;
    if (role === "Admin" || role === "Teacher") {
        return next();
    }
    return res.status(403).json({ error: "Access denied. Unauthorized role." });
};


export const isStudent =  async(req, res, next) => {
    try {
        if(req.user || req.user.role == "Student"){
            return next();
        }
        else{
            return res.json({ message: "Access Denied, Only Student can access"})
        }
    } catch (error) {
        res.json({
            error:"Internal server error"
          })
          console.log(error)
    }
}