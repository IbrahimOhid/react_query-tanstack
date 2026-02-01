import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

// to Fetch the Data

export const fetchPost = async ()=>{
   const response = await api.get('/posts');
   return response.status === 200 ? response.data : [];
}