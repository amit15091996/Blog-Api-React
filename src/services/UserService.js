import { myAxios } from "./Helper";

export const SignUp = (user) => {
  return myAxios
    .post("/auth/register", user)
    .then((response) => response.data);
};

export const LoginUser =(loginDetail)=>{
    return myAxios
    .post("/auth/login", loginDetail)
    .then((response) => response.data);

}
