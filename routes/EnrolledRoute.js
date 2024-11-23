import express from "express";
import { createAdmin, createTeacher, createStudent, getAllUsers, getAllAdmin, getAllTeacher, getAllStudent} from "../controllers/userController.js";
import { createSubject , getAllSubject} from "../controllers/subjectController.js";
import { isAdmin, isTeacher, isAuthorized, isStudent} from "../middleware/Middleware.js";
import { createPractical ,getAllPracticals } from "../controllers/practicalController.js";
import { enrolledStudents , getEnrolledStudents } from "../controllers/enrollStudentController.js";

const router = express.Router();

router.post("/admin/create", createAdmin);
router.get("/admin/get", (req, res, next) => {

    const role = req.query.role;
    if (role == 'Admin') {
        return res.status(403).json({ error: 'Access denied. Only Admin can Access role.' });
    }
    next();
}, getAllAdmin);

router.post("/teacher/create", createTeacher);
router.get("/teacher/get", (req, res, next) => {

    const role = req.query.role;
    if (role == 'Admin') {
        return res.status(403).json({ error: 'Access denied. Only Admin can Access role.' });
    }
    next();
}, getAllTeacher);

router.post("/student/create", createStudent);
router.get("/student/get",  (req, res, next) => {

    const role = req.query.role;
    if (role == 'Teacher' && 'Admin') {
        return res.status(403).json({ error: 'Access denied. Unauthorized role.' });
    }
    next();
}, getAllStudent);

router.get("/users/get", (req, res, next) => {
    
    const role = req.query.role;
    if (role == 'Admin') {
        return res.status(403).json({ error: 'Access denied. Only Admin can Access role.' });
    }
    next();
}, getAllUsers);

router.post("/subject/create", createSubject);
router.get("/subject/get",  getAllSubject);

router.post("/practical/create", isTeacher, createPractical);
router.get("/practical/get", getAllPracticals);
router.post("/practical/enroll", enrolledStudents);
router.get("/practical/enroll/get", getEnrolledStudents);


export default router;