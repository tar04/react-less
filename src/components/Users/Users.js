import React, {useEffect, useState} from "react";
import {userService} from "../../service";
import {User} from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(users => setUsers(users));
    }, [])

    return (
        <div style={{width:"50%"}}>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};