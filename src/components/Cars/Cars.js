import React, {useEffect, useState} from "react";

import {carService} from "../../service";
import {Car} from "../Car/Car";

const Cars = ({carToAdd, setCarForUpdate, carForUpdate}) => {

    console.log(window)

    const [cars, setCars] = useState([]);

    const [carIdToDelete, setCarIdToDelete] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [carForUpdate]);

    useEffect(() => {
        if (carToAdd) {
            setCars(prev => [...prev, carToAdd])
        }

    }, [carToAdd]);

    useEffect(() => {
        if (carIdToDelete) {
            setCars(prev => prev.filter(car => car.id !== carIdToDelete))
        }

    }, [carIdToDelete]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarIdToDelete={setCarIdToDelete}
                                  setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};