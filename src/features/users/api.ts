import { api } from "../../lib/api";

export const getUsers = () => {
  return api.get("/users");
};
export const addUser = (username: string) => {
  return api.post("/users", { username });
};
export const deleteUser = (userId: string) => {
  return api.delete(`/users/${userId}`);
};
