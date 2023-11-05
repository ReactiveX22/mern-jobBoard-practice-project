import mongoose from 'mongoose';

// import { JOB_STATUS, JOB_TYPE } from '../utils/constants.js';

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,

    lastName: {
      type: String,
      default: 'lastname',
    },
    location: {
      type: String,
      default: 'my city',
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model('User', UserSchema);
