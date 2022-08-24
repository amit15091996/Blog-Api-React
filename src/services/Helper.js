import axois from 'axios';

export const BASE_URL = 'http://localhost:9090/api/v1/';

export const myAxios = axois.create({
    baseURL: BASE_URL
})


// export const myAxios = axois.create()

// myAxios.post('http://localhost:9090/api/v1/auth/register');