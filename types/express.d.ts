import { IUserDocument } from "../models/userModel"; 
import { Request } from "express";

declare module "express-serve-static-core" {
  interface Request {
    user?: IUserDocument; 
  }
}
