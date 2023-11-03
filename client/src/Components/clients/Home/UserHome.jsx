import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import userAxios from "../../../Axios/userAxios.js";

function UserHome() {
    const [name, setName] = useState("");
    const token = useSelector((store) => store.Client.Token);
    useEffect(() => {
        if (token) {
            userAxios.get("/getDetails", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }).then((res) => {
                    setName(res.data.name);
                });
        }else {
            console.log("no token");
        }
    }, [token]);

    return (
        <div>
            <div className="p-3">
                <div className="m-5">
                    <div className="d-flex justify-content-center p-3"></div>
                    <div className="d-flex justify-content-center">
                        <h1>{name ? <b>Welcome {name}</b> : "Please Login"}</h1>
                        {/* <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLlShSYUvQr9NJB6liNjrg0DJVBQNxGw4-3w&usqp=CAU"
                          alt="...."
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserHome;
