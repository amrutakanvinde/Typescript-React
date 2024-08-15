import axios from "axios";
import { useEffect, useState } from "react"

interface TodoType{
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const FetchApi = () => {

    const [todos, setTodos] = useState<TodoType[]>([]);

    useEffect (() => {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then((response)=>response.json())
        // .then(data => {
        //     console.log("Hello",data.slice(0,10))
        //     setTodos(data.slice(0,10) as TodoType[]);
        // })
        // .catch(err => console.log(err))

        axios.get<TodoType[]>('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            setTodos(res.data.slice(0,20))
        })
    },[])

    return (
        <div>
            {
             todos.map(todo=> {return <li>{todo.title}</li>}) 
            }
        </div>
    )
}