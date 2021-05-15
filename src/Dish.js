import React, {useState} from "react"

export const Dish = (props) => {
    //[state variable, function to change state variable]
    const [counter, setCounter] = useState(0);

    //counts on button
    const addDish = () => {
        setCounter(counter+1);
    };

    return (
        <div className="Dish">
            <h2>{props.name}</h2>
            <p>Price: ${props.price}</p>
            <p>Amount: {counter}</p>
            <button onClick={addDish}>Add dish ➕</button>
        </div>
    );
};