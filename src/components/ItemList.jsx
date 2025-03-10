import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
    return (
        <div className='d-flex justify-content-around align-items-center flex-wrap'>
            {products.map((products)=> <Item products={products} key={product.id}/>)}
        </div>
    )
}

export default ItemList