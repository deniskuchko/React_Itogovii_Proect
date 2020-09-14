import * as axios from "axios";
let instance = axios.create({
  baseURL: "http://localhost:3000/",
});

let instanceAuth = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "api-key": "ea93dd19-8ab1-41f1-896b-2fe3b8c089dc",
  },
});
export const userAPI = {
  getUsers: (userId) => {
    return instance.get(`/users/${userId}`);
  },

  getPosts: (currentPage, pageSize) => {
    return instance
      .get(`posts?_page=${currentPage}&_limit=${pageSize}`)
      .then((response) => response);
  },
  getMyPosts: () => {
    return instance.get("/posts");
  },
};
export const postAPI = {
  setNewPost: (title, articleAbout, textOfArticle, keywords, userId) => {
    return instance.post("/posts", {
      title,
      articleAbout,
      textOfArticle,
      keywords,
      userId,
    });
  },
  getPostId: (postId) => {
    return instance.get(`/post/{postId}`);
  },
};
export const authApi = {
  me: () => {
    return instanceAuth.get("auth/me");
  },
  login: () => {
    return instance.get("/users");
  },
  signUp: (login, email, password, rememberMe) => {
    return instance.post(`/users`, { login, email, password, rememberMe });
  },
};
