import React, {useState} from "react";

import {Posts, UserInfo, Users} from "./components";

const App = () => {

    const [singleUser, setSingleUser] = useState(null);
    const [idOfUser, setIdOfUser] = useState(null);

    return (
        <div>
            <div style={{"display": "flex", "border": "2px solid red"}}>
                <Users setSingleUser={setSingleUser} setIdOfUser={setIdOfUser}/>
                {singleUser && <UserInfo singleUser={singleUser} setIdOfUser={setIdOfUser}/>}
            </div>
            {idOfUser && <Posts idOfUser={idOfUser}/>}
        </div>
    );
};

export {App};