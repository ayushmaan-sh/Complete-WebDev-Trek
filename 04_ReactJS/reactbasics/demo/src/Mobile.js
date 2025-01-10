import { useState } from 'react';


export default function Mobile(props) {
    const { image, mobileName, price } = props;

    // Using state for counter
    const [counter, setCounter] = useState(0);

    const addValue = () => {
        setCounter(counter + 1);
    };

    const removeValue = () => {
        if(counter === 0){
            return alert('cannot be less then 0!')
        }
        setCounter(counter - 1)
    }

    return (
        <div id="mobileCard">
            <div className='card'>
                <img src={image} alt="mobile" />
                <p>{mobileName}</p>
                <p>{price}</p>
                <h4>Cart Value: {counter}</h4>
                <button onClick={addValue}>Add to cart</button>
                <br />
                <button onClick={removeValue}>Remove from cart</button>
            </div>
        </div>
    );
}
