import { useState } from "react";


function ItemCount({initial, stock}) {

const [count, setCount] = useState (initial);

    return(
        <div className="itemCount">
            <div className="countContainer">
                <button onClick={()=>{setCount(count + 1)}}>+</button>
                <p>{count}</p>
                <button onClick={()=>{setCount(count - 1)}}>-</button>
            </div>
            <button className="confirm">Confirmar compra</button>
        </div>
    );
}

export default ItemCount;