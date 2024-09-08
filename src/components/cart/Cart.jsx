import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import { RxCross1 } from "react-icons/rx";
import { Card } from 'react-bootstrap';
import './cart.scss'
import { 
    decrease_quantity, 
    delete_from_cart, 
    increase_quantity } from '../../redux/action/action';


function Cart() {
    const dispatch = useDispatch()
    const cartList = useSelector(state=>state.cartList)
    
    const handleIncress = ({id, totalPrice})=>{
        dispatch(increase_quantity(id))
        //calbil(totalPrice)
    }
    const handleDecrease = ({id, totalPrice})=>{
        dispatch(decrease_quantity(id))
        //calbil(totalPrice)
    }

    const handleDelete = (id)=>{
        dispatch(delete_from_cart(id))
    }

    let sum=0
    const calbil =(totalCost)=>{
        return sum+=totalCost
    }
  return (
    <div>
        <div className="top">
            <Navbar />
        </div>
        <div className="middle">
            <div className="left">
                <h3>An overview of your order</h3>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartList && cartList.map(cart=>{
                                const {image, title, price, quantity, totalPrice, id} = cart
                                return <tr key={id} className='eachRow'>
                                    <td><img src={image} alt="" /></td>
                                    <td>{title}</td>
                                    <td>${price}</td>
                                    <td>
                                        <button 
                                        className='btn btn-success me-1'
                                        disabled={cart.quantity ==0 }
                                        onClick={e=>handleDecrease({id, totalPrice})}>-</button>
                                        {quantity}
                                        <button 
                                        className='btn btn-success ms-1' 
                                        onClick={e=>handleIncress({id, totalPrice})}>+</button>
                                    </td>
                                    <td>${totalPrice}</td>
                                    <td>
                                        <button 
                                        className='btn btn-danger'
                                        onClick={e=>handleDelete(cart.id)}
                                        ><RxCross1 /></button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <div className="right">
                <h2>Order details</h2>
                {
                    cartList.map(item=>{
                        const bill = calbil(item.totalPrice)
                        return <Card className='box' key={item.id}>
                            <p>
                                <span>Subtotal</span>
                                <span>${bill}</span>
                            </p>
                            <p>
                                <span>Shipping</span>
                                <span>Free</span>
                            </p>
                            <p>
                                <span>Estimated Tax</span>
                                <span>-</span>
                            </p>
                            <Card.Footer>
                                <p>
                                    <span>Totat</span>
                                    <span>${bill}</span>
                                </p>
                            </Card.Footer >
                            <div className="btn -center">
                                <button className='btn btn-dark' onClick={console.log('order placed')}>Place order</button>
                            </div>
                        </Card>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Cart