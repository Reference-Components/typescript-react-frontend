import { BASE_API_URL } from "../config";

const customFetch = async (path: string, options = {}) => {
  const baseOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(BASE_API_URL + path, {
    ...baseOptions,
    ...options,
  });
  if (response.ok) return response.json();

  throw new Error("Network response was not OK!");
};

export const api = {
  get: (path = "") => {
    return customFetch(path, {
      method: "GET",
    });
  },
  post: (path = "", data = {}) => {
    return customFetch(path, {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
  delete: async (path = "") => {
    return customFetch(path, {
      method: "DELETE",
    });
  },
};
