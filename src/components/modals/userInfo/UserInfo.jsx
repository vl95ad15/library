import React, {useEffect, useState} from "react";
import axios from "axios";
import './UserInfo.css'

function UserInfo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getUserData() {
            await axios
                .get("http://localhost:4000/users")
                .then((response) => {
                    console.log(response.data);
                    setData(response.data);
                }, (reason) => console.log(reason))
        }
        getUserData().then(r => r)
    }, [])

    return(
        <div>
            <div className='UserInfoBox'>
                {data.map((user) => {
                    return (
                        <>
                            <div>{user._name}</div>
                            <div>{user._account._created}</div>
                        </>
                    )
                })
                }
            </div>
        </div>
    )
}

export default UserInfo
