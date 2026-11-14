import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  roles: string[];
  profilePicture: {
    id: string;
    url: string | null;
  };
  password?: string | null;
  authProviders: {
    provider: string;
    providerId: string;
  }[];
  subscription: {
    id: string;
    customerId: string;
    created: Date;
    status: string;
    startDate: Date;
    currentPeriodEnd: Date;
    nextPaymentAttempt: Date;
  };
  resetPasswordToken: string;
  resetPasswordExpire: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email already exists'],
      lowercase: true,
      trim: true,
    },
    roles: {
      type: [String],
      default: ['user'],
      enum: ['user', 'admin'],
    },
    profilePicture: {
      id: String,
      url: {
        type: String,
        default: null,
      },
    },
    password: {
      type: String,
      default: null,
      select: false, // Exclude password from query results by default
      minlength: [8, 'Password must be at least 8 characters long'],
    },

    authProviders: {
      provider: {
        type: String,
        required: [true, 'Auth provider is required'],
      },
      providerId: {
        type: String,
        required: [true, 'Auth provider ID is required'],
      },
    },
    subscription: {
      id: String,
      customerId: String,
      created: Date,
      status: String,
      startDate: Date,
      currentPeriodEnd: Date,
      nextPaymentAttempt: Date,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  {
    timestamps: true,
  },
);

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
