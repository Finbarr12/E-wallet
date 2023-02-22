import mongoose from "mongoose";
import { WalletData } from "../Interface/Allinterfaces";

interface Iwallet extends WalletData, mongoose.Document {}

const WalletSchema = new mongoose.Schema<WalletData>({
  Balance: {
    type: String,
  },
  debit: {
    type: Number,
  },
  credit: {
    type: Number,
  },
});

export default mongoose.model<Iwallet>("wallet", WalletSchema);
