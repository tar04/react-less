import axiosService from "./axiosService";

import {urls} from "../config";

export const postService = {
    getAll: () => axiosService.get(urls.posts).then(({data}) => data),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`).then(({data}) => data),
    getCommentsOfPost: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`).then(({data}) => data),
}