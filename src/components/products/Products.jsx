import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from '../product/Product';
import { v4 as uuidv4 } from 'uuid';
import './products.scss';


function Products() {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async()=>{
            try {
                const response = await axios.get('https://api.escuelajs.co/api/v1/products')
                const data = response.data;
                console.log(data)
                setProducts(data)
            } catch (error) {
                
            }
        }
        fetchProducts();
    }, [])
  return (
    <div className='products'>
        {
            products && products.map((product, index)=>{
                const createProduct = {
                    id: uuidv4(),
                    title: product.title,
                    price: product.price,
                    totalPrice: product.price,
                    image: product.images[0],
                    quantity: 1,
                    inCart: false
                }
                return <Product {...createProduct} key={index}/>
            })
        }
    </div>
  )
}

export default Products