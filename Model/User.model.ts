import mongoose from "mongoose";
import { UserData } from "../Interface/Allinterfaces";

interface Iuser extends UserData, mongoose.Document {}

const UserSchema = new mongoose.Schema<UserData>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
    },
    accountNumber: {
      type: Number,
    },
    verified: {
      type: Boolean,
    },
    wallet: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "wallets",
      },
    ],
    history: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "histories",
      },
    ],

    PhoneNo: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<Iuser>("userwalletdb", UserSchema);
