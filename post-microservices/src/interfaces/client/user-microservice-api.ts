import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export interface User {
  id: number;
  name: string;
  email: string;
}

export const UserServices = {
  findById: async (userId: number): Promise<User> => {
    const user = await api.get(`/user/${userId}`);
    return user.data;
  },
};
