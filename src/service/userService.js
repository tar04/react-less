import axiosService from "./axiosService";

import {urls} from "../config";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(({data}) => data),
    getById: (id) => axiosService.get(`${urls.users}/${id}`).then(({data}) => data),
    getPostsOfUser: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`).then(({data}) => data),
}