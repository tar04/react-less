import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: (car) => axiosService.post(urls.cars, car),
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
}

export {
    carService
}