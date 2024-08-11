import { createContext, useEffect, useState } from "react";

export interface User {
    name:string;
    age:number;
    isMarried: boolean
}

interface UserContextType {
    users: User[] | null;
    addUser: (user:User) => void;
    updateUser: (id: string) => void;
    deleteUser: (id: string) => void;
}

const contextInitialValue = {
    users: null, 
    addUser: () => null,
    updateUser: ()=> null,
    deleteUser: ()=> null,
}

export const UserContext = createContext<UserContextType> (contextInitialValue);

interface props {
    children: React.ReactNode;
}

export const UserProvider = (props: props)=>{

    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(()=> {
        setUsers([{name:"hello", age:33, isMarried: false}])
    }, [])

    const addUser = (user: User) => null;
    const updateUser = (id: string) => null;
    const deleteUser = (id: string) => null;

    return <UserContext.Provider value={{users, addUser, updateUser, deleteUser}}>
        {props.children}
    </UserContext.Provider>
}