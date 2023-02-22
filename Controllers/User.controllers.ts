import UserModel from "../Model/User.model";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const RegisterUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, userName, PhoneNo } = req.body;
    const salt = await bcrypt.genSalt(12);
    const hashedpass = await bcrypt.hash(password, salt);

    const date = Date.now();

    const genNumber = Math.floor(Math.random() * 70) + date;

    const register = await UserModel.create({
      name,
      email,
      password: hashedpass,
      userName,
      PhoneNo,
      verified: true,
      accountNumber: genNumber,
    });
    res.status(200).json({
      message: "successful",
      data: register,
      token: jwt.sign({ id: register._id }, "4irlbwq9d9pkevukfbkbka", {
        expiresIn: "1h",
      }),
    });
  } catch (error) {
    return res.status(404).json({
      message: "An error occured",
      data: error,
    });
  }
};
