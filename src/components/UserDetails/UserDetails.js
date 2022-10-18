import React, {useEffect, useState} from "react";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {userService} from "../../service";

const UserDetails = () => {

    const {id} = useParams();

    const {state} = useLocation();

    const [singleUser, setSingleUser] = useState(state);

    useEffect(() => {
        if (!state) {
            userService.getById(id).then(user => setSingleUser(user))
        } else {
            setSingleUser(state)
        }
    }, [id, state])

    return (
        <div>
            {singleUser && <div>
                <h5>{singleUser.id}) {singleUser.name}</h5>
                <h5>username: {singleUser.username}</h5>
                <h5>email: {singleUser.email}</h5>
                <h5>phone: {singleUser.phone}</h5>
                <h5>website: {singleUser.website}</h5>
                <hr/>
                <h4>Address:</h4>
                <h5>street: {singleUser.address.street}</h5>
                <h5>city: {singleUser.address.city}</h5>
                <Link to={"posts"}>
                    <button>Show posts</button>
                </Link>
            </div>}
            <Outlet/>
        </div>
    );
};

export {UserDetails};