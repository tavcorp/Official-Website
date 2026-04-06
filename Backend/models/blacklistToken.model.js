import mongoose from 'mongoose';

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 60 * 60 * 24, // TTL in seconds (24 hours)
    },
  },
  {
    timestamps: true,
  }
);

const BlacklistToken = mongoose.model('BlacklistToken', blacklistTokenSchema);

export default BlacklistToken;