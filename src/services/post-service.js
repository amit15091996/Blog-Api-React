import { privateAxios } from "./Helper";
import { myAxios } from "./Helper";
//create post function
export const createPostService = (postData) => {
  return privateAxios
    .post(
      `/user/${postData.userId}/category/${postData.categoryId}/posts`,
      postData
    )
    .then((response) => response.data);
};

// get all post

export const loadAllPosts = (pageNumber, pageSize) => {
  return myAxios
    .get(`/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    .then((response) => response.data);
};

//load post bt id
export const loadPost = (postId) => {
  return myAxios.get("/posts/" + postId).then((response) => response.data);
};
