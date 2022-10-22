import React, {useReducer, useRef} from "react";

import {Cat, Dog} from "./components";

const init = (initValue) => ({cats: initValue, dogs: initValue});

const reducer = (state, action) => {
    switch (action.type) {
        case "addDog":
            return {
                ...state,
                dogs: [...state.dogs, {
                    id: state.dogs.slice(-1).length ? state.dogs.slice(-1)[0].id + 1 : 1,
                    name: action.payload
                }]
            }
        case"addCat":
            console.log(state.cats.slice(-1)[0])
            return {
                ...state,
                cats: [...state.cats, {
                    id: state.cats.slice(-1).length ? state.cats.slice(-1)[0].id + 1 : 1,
                    name: action.payload
                }]
            }
        case"deleteDog":
            return {
                ...state,
                dogs: state.dogs.filter(dog => dog.id !== action.payload)
            }
        case"deleteCat":
            return {
                ...state, cats: state.cats.filter(cat => cat.id !== action.payload)
            }
    }
}

const App2 = () => {

    const [state, dispatch] = useReducer(reducer, [], init);

    const cats = useRef();

    const dogs = useRef();

    const addDog = () => {
        dispatch({type: 'addDog', payload: dogs.current.value});
        dogs.current.value = '';
    }
    const addCat = () => {
        dispatch({type: 'addCat', payload: cats.current.value});
        cats.current.value = '';
    }


    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div><label>For cats:<input type="text" ref={cats} placeholder={"enter cats name"}/></label>
                    <button onClick={addCat}>Save</button>
                </div>
                <div><label>For dogs:<input type="text" ref={dogs} placeholder={"enter dogs name"}/></label>
                    <button onClick={addDog}>Save</button>
                </div>
            </div>
            <hr/>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                <div>{state.cats.map(cat => <Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}</div>
                <div>{state.dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}</div>
            </div>
        </div>
    );
};

export {App2};