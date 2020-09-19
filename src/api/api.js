import * as axios from "axios";
let instance = axios.create({
  baseURL: "http://localhost:3000/",
});

export const userAPI = {
  getUsers: (userId) => {
    return instance.get(`/users/${userId}`);
  },
  changeUser: (userId, login, email, password) => {
    return instance.put(`/users/${userId}`, { login, email, password });
  },

  getPosts: (currentPage, pageSize) => {
    return instance.get(
      `posts?page[offset]=${currentPage}&page[limit]=${pageSize}`
    );
    /*       .then((response) => response);
     */
  },
  getMyPosts: () => {
    return instance.get("/posts");
  },
};
export const postAPI = {
  setNewPost: (name, title, articleAbout, textOfArticle, keywords, userId) => {
    return instance.post("/posts", {
      name,
      title,
      articleAbout,
      textOfArticle,
      keywords,
      userId,
    });
  },
  getPostId: (postId) => {
    return instance.get(`/posts/${postId}`);
  },
  setLikePost: (
    id,
    name,
    image,
    title,
    articleAbout,
    textOfArticle,
    likes,
    favorited,
    keywords,
    userId
  ) => {
    return instance.put(`/posts/${id}`, {
      name,
      image,
      title,
      articleAbout,
      textOfArticle,
      likes,
      favorited,
      keywords,
      userId,
    });
  },
};
export const authApi = {
  me: () => {
    return instance.get("/users");
  },
  login: () => {
    return instance.get("/users");
  },
  signUp: (login, email, password, rememberMe) => {
    return instance.post(`/users`, { login, email, password, rememberMe });
  },
};
