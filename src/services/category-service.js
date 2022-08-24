import { myAxios } from "./Helper";

export const loadAllCategories = () => {
  return myAxios.get('/categories/').then((response) => {
    return response.data;
  });
};
// http://localhost:9090/api/v1/categories/