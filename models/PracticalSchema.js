import mongoose from 'mongoose';

const practicalSchema = mongoose.Schema({
  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',
    required: true,
  },
  email: {
    type: String,
    required: true,
    
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  
  enrolledStudents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
}); 


const practicalModel = mongoose.model('Practical', practicalSchema);

export default practicalModel;