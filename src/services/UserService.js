import { myAxios } from "./Helper";

export const SignUp = (user) => {
  return myAxios
    .post("/api/v1/auth/register", user)
    .then((response) => response.data);
};

export const LoginUser =(loginDetail)=>{
    return myAxios
    .post("/api/v1/auth/login", loginDetail)
    .then((response) => response.data);

}
