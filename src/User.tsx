import * as React from "react";
import { useState } from "react";
import { UserContext } from "./UserContextProvider";

interface Props {
    name:string;
    age:number;
    isMarried: boolean
}


export const User = (props:Props) => {

    const [userBio, setUserBio] = useState<string | null>(null)
    const [isShowInfo, setShowInfo] =useState<boolean | null>(false);

    const toggleInfo = () => {
        setShowInfo((prev) => !prev)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserBio(event.target.value)
    }

    //when dealing with form event it might look like this
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    // const {users, addUser,updateUser, deleteUser} = React.useContext(UserContext);
    return (
        <div>
            {isShowInfo && (
                <>
                    <p>Name:{props.name}</p>
                    <p>Age:{props.age}</p>
                    <p>Marital Status:{props.isMarried?'Married':'Single'}</p>
                </>
            )}

            <p>{props.name} Bio: {!userBio ? "No Bio Avaailable": userBio}</p>
            <input onChange={handleChange}/>
            <button onClick={toggleInfo}> Toggle Info</button>
        </div>
    )
}