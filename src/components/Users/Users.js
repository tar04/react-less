import React, {useEffect, useState} from "react";

import {userService} from "../../service";
import {User} from "../User/User";
import "./Users.css";

const Users = ({setSingleUser,setIdOfUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(users => setUsers(users))
    }, [])

    return (
        <div className="users">
            {users.map(user => <User key={user.id} user={user} setSingleUser={setSingleUser} setIdOfUser={setIdOfUser}/>)}
        </div>
    );
};

export {Users};