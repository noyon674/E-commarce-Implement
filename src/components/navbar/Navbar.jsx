import React from 'react';
import './navbar.scss';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logout_success, reset } from '../../redux/action/action';

function Navbar() {
    const dispatch = useDispatch()
    const handleLogout = (e)=>{
        dispatch(logout_success(false))
    }
    const handleReset = ()=>{
        dispatch(reset())
    }
  return (
    <div className='navbar'>
        <div className="left">
            <a href="">Furni<span>Flex</span></a>
        </div>
        <div className="middle">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div className="right">
            <a href="" onClick={handleLogout}>logout</a>
            <a href="/cart"><FaShoppingCart /></a>
            {/* <a href="" className='ms-2' onClick={handleReset}>reset</a> */}
        </div>
    </div>
  )
}

export default Navbar