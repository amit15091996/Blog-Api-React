import { privateAxios } from "./Helper";

//create post function
export const createPostService = (postData) => {
  return privateAxios
    .post(`/user/${postData.userId}/category/${postData.categoryId}/posts`, postData)
    .then((response) => response.data);
};

//user/{userId}/category/{categoryId}/posts
//user/1/category/1/posts
