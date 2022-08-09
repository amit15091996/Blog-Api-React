import { myAxios } from "./Helper";

export const signUp = (user) => {

    return myAxios
    .post("http://localhost:9090/api/v1/auth/register", user)
    .then((response) => response.data)
}
