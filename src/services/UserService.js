import { myAxios } from "./Helper";

export const SignUp = (user) => {
  return myAxios
    .post("/api/v1/auth/register", user)
    .then((response) => response.data);
};
