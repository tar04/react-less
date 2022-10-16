import React, {useState} from "react";

import {CarForm, Cars} from "./components";

const App = () => {

    const [carForUpdate, setCarForUpdate] = useState(null);

    const [carToAdd, setCarToAdd] = useState(null);

    return (
        <>
            <CarForm setCarToAdd={setCarToAdd} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars carToAdd={carToAdd} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}/>
        </>
    )

}
export {App};
