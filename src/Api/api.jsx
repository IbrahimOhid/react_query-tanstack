import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// to Fetch the Data
export const fetchPost = async (pageNumber) => {
  const response = await api.get(`/posts?_start=${pageNumber}&_limit=8`);
  return response.status === 200 ? response.data : [];
};

// to fetch inv data
export const fetchInvPost = async (id) => {
  const response = await api.get(`/posts/${id}`);
  return response.status === 200 ? response.data : [];
};
