import React, {useReducer} from "react";

const init = (initValue) => ({count1: initValue, count2: initValue, count3: initValue})

const reducer = (state, action) => {
    switch (action.type) {
        case "inc1":
            return {...state, count1: ++state.count1}
        case "dec1":
            return {...state, count1: --state.count1}
        case "res1":
            return {...state, count1: 0}
        case "inc2":
            return {...state, count2: ++state.count2}
        case "dec2":
            return {...state, count2: --state.count2}
        case "res2":
            return {...state, count2: 0}
        case "inc3":
            return {...state, count3: ++state.count3}
        case "dec3":
            return {...state, count3: --state.count3}
        case "res3":
            return {...state, count3: 0}
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, 0, init);

    return (
        <div>
            <div>
                {state.count1}
                <button onClick={() => dispatch({type: "inc1"})}>Inc</button>
                <button onClick={() => dispatch({type: "dec1"})}>Dec</button>
                <button onClick={() => dispatch({type: "res1"})}>Reset</button>
            </div>
            <hr/>
            <div>
                {state.count2}
                <button onClick={() => dispatch({type: "inc2"})}>Inc</button>
                <button onClick={() => dispatch({type: "dec2"})}>Dec</button>
                <button onClick={() => dispatch({type: "res2"})}>Reset</button>
            </div>
            <hr/><div>
                {state.count3}
                <button onClick={() => dispatch({type: "inc3"})}>Inc</button>
                <button onClick={() => dispatch({type: "dec3"})}>Dec</button>
                <button onClick={() => dispatch({type: "res3"})}>Reset</button>
            </div>
            <hr/>

        </div>
    );
};

export {App};