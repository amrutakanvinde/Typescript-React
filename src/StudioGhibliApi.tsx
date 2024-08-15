import axios from "axios";
import { useEffect, useState } from "react";
// import style from "./assets/styles.modules.css"

interface items {
    description: string,
    director: string,
    id: string,
    image: URL,
    locations: Array<URL>,
    people: Array<URL>,
    movie_banner: URL,
    title: string
}

export const StudioGhibli =() => {

const baseUrl = 'https://ghibliapi.vercel.app/films'
const [data, setData] = useState<items[] | null>(null);
const style = `
    .main {
      text-align: left;
        background-color: red
    }    `
useEffect(() => {
    axios.get(baseUrl)
    .then(res=> setData(res.data))

}, [])

    return(
        <div className="main">
            <style>
                {style}
            </style>
            {/* <div > */}
                { !data ? <p>Loading..</p> :
                    data.map(item=> (<li key={item.id}>{item.title}</li>)

                )}
            {/* </div> */}
        </div>
    )
}
