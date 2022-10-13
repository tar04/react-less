import {axiosService} from "./axiosService";
import {urls} from "../config";

const userService = {
    getAll: () => axiosService.get(urls.users).then(({data}) => data),
    getPosts: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`).then(({data}) => data),
}

export {userService}