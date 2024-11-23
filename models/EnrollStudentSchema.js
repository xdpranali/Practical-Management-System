import mongoose from 'mongoose';

export const enrollSchema = mongoose.Schema({
practicalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Practical',
    required: true,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});


const enrollModel = mongoose.model('Enroll', enrollSchema);

export default enrollModel;