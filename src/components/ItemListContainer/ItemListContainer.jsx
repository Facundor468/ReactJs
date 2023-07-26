import React, { useState , useEffect} from "react"
import ItemCount from "../ItemCount/ItemCount"
import { ItemList } from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) =>{
    const [productos, setProductos]=useState([])
    const list =[
        {id:'01' , name:'camiseta' , stock:10 , price:2500 , description:'loremwdqr34thgdbfdvfawrergeht' , img:'../img/01.png'}
    ]

    const getProducts = () =>{
        return new Promise((resolve, reject)=>{
            let error = false
            setTimeout(()=>{
                if (error){
                    reject('no hay data, intente mas tarde')
                }else{
                    resolve(list)
                }     
            },2000)
        })
    }
    useEffect(()=>{
        getProducts()
        .then((res)=>useState(res))
        .catch((error)=>console.log(error))
    },[])

    const onAdd = (cantidad) =>{
        console.log ('compraste', cantidad )
    }


    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
            <ItemCount initial={1} stock={10} onAdd = {onAdd}/>
        </div>
    )
}

export default ItemListContainer