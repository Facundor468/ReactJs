import React from 'react'

export const ItemList = (productos) => {
  return (
    <div>
        {productos.map ((prod)=> <h2 key={prod.id}>{prod.name}</h2>)}
    </div>
  )
}
