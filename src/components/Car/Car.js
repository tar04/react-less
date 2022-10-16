import React from "react";

import {carService} from "../../service";
import "./Car.css";

const Car = ({car, setCarIdToDelete, setCarForUpdate}) => {

    const {model, id, year, price} = car;

    async function deleteCar() {
        await carService.deleteById(id);
        setCarIdToDelete(id);
    }

    function updateCar() {
        setCarForUpdate(car);
    }

    return (
        <div className="car">
            <h4>id: {id}</h4>
            <h4> model: {model}</h4>
            <h4>year: {year}</h4>
            <h4>price: {price}</h4>
            <div className="car_button">
                <button onClick={() => deleteCar()}>Delete</button>
                <button onClick={() => updateCar()}>Update</button>
            </div>
        </div>
    );
};

export {Car};