const LIKE = "LIKE";
const UNLIKE = "UNLIKE";
const SETUSERS = "SETUSERS";

let initialState = {
  users: [
    {
      id: 1,
      name: "Denis",
      data: "28.02.2020",
      title: "Title monkey",
      like: true,
      photoUsers:
        "https://i2.wp.com/logos-download.com/wp-content/uploads/2016/04/Vancouver_Canucks_logo_brand.png",
    },
    {
      id: 2,
      name: "Denis",
      data: "28.02.2020",
      title: "Title monkey",
      like: false,
      photoUsers:
        "https://i2.wp.com/logos-download.com/wp-content/uploads/2016/04/Vancouver_Canucks_logo_brand.png",
    },
  ],
};
const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case LIKE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, like: true };
          }
          return u;
        }),
      };
    case UNLIKE:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, like: false };
          }
          return u;
        }),
      };
    case SETUSERS:
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

export const likeAC = (userId) => ({
  type: LIKE,
  userId,
});
export const unLikeAC = (userId) => ({
  type: UNLIKE,
  userId,
});
export const setUsersAC = (users) => ({
  type: SETUSERS,
  users,
});
export default usersReducers;
