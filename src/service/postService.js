import axiosService from "./axiosService";

import {urls} from "../config";

export const postService = {
    getAll: (page, _limit=2) => axiosService.get(urls.posts, {
        params: {
            _start:(page-1)*_limit,
            _limit
        }
    }).then(({data}) => data),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`).then(({data}) => data),
    getCommentsOfPost: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`).then(({data}) => data),
}