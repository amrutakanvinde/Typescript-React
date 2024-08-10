export interface Person {
    name:string;
    age:number;
    isMarried: boolean
}


export const Person = (props:Person) => {
    return (
        <div>
            {""}
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
            <p>Marital Status:{props.isMarried?'Married':'Single'}</p>
        </div>
    )
}