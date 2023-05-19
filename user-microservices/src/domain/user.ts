import { Schema, model } from "mongoose";

export interface User {
  id: string;
  name: string;
  email: string;
}

const UserSchema = new Schema<User>({
  email: {
    type: String,
    unique: true,
  },
  name: String,
});

export const UserModel = model<User>("User", UserSchema);
