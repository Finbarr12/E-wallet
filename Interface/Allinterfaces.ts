export interface UserData {
  name: string;
  email: string;
  password: string;
  userName: string;
  PhoneNo: number;
  accountNumber: number;
  verified: boolean;
  wallet: {}[];
  history: {}[];
}

export interface WalletData {
  Balance: string;
  credit: number;
  debit: number;
}

export interface HistoryData {
  message: string;
  transactionRefrence: number;
  transactionType: boolean;
}
