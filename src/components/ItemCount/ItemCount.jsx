import React, {useState} from  'react'

const ItemCount = ({stock, onAdd, initial}) =>{
    const [count, setCount] = useState(initial)
    const sumar = () =>{
        if (count < stock)
        setCount(count + 1)
        
    }
    const restar = () =>{
        if (count > 0){
            setCount (count - 1)
        }
    }
    return(
        <div>
            <div>
                <button onClick={restar}>-</button>
                <span>{count}</span>
                <button onClick={sumar}>+</button>
            </div>
            <button disabled={count === 0} onClick={()=>onAdd(count)}>Comprar</button>
        </div>
    )
}

export default ItemCount