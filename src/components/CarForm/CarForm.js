import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carService} from "../../service";
import "./CarForm.css";

const CarForm = ({setCarToAdd, carForUpdate, setCarForUpdate}) => {

    const {register, reset, handleSubmit, setValue, formState: {errors}} = useForm(
        {resolver: joiResolver(carValidator), mode: "onTouched"}
    );

    function submit(data) {
        if (carForUpdate) {
            carService.updateById(carForUpdate.id, data);
        } else {
            carService.create(data).then(({data}) => setCarToAdd(data));
        }

        setCarForUpdate(null);
        reset();
    }

    useEffect(() => {
        if (carForUpdate) {
            const {model, year, price} = carForUpdate;

            setValue('model', model);
            setValue('year', year);
            setValue('price', price);
        }
    }, [carForUpdate, setValue]); //setValue просив лінтер

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model<input type="text" {...register("model")}/></label></div>
            {errors.model && <span>{errors.model.message}</span>}
            <div><label>Year<input type="number"{...register("year", {valueAsNumber: true})}/></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            <div><label>Price<input type="number" {...register("price", {valueAsNumber: true})}/></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            <button>Send</button>
        </form>
    );
};

export {CarForm};