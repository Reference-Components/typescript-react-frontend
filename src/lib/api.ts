import { BASE_API_URL } from "../config";

const customFetch = async (path: string, options = {}) => {
  const response = await fetch(BASE_API_URL + path, options);
  if (response.ok) return response.json();

  throw new Error("Network response was not OK!");
};

export const api = {
  get: (path = "") => {
    return customFetch(path, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  post: (path = "", data = {}) => {
    return customFetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  delete: async (path = "") => {
    return customFetch(path, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
