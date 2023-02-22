import mongoose from "mongoose";
import { HistoryData } from "../Interface/Allinterfaces";

interface Ihistory extends HistoryData, mongoose.Document {}

const HistorySchema = new mongoose.Schema<HistoryData>({
  transactionRefrence: {
    type: Number,
  },
  message: {
    type: String,
  },
  transactionType: {
    type: Boolean,
  },
});

export default mongoose.model<Ihistory>("history", HistorySchema);
