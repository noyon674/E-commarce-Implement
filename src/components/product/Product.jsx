import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart } from '../../redux/action/action';

function Product(props) {
    const dispatch = useDispatch();
    const { title, image, price, id } = props;
    const cartList = useSelector(state => state.cartList);
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        const isInCart = cartList.some(item => item.id === id);
        setInCart(isInCart);

    }, [cartList, id]);

    const handleAddCart = (item) => {
        if (!inCart) {
            dispatch(add_to_cart(item));
        }
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <h4>${price}</h4>
                <button 
                    className='btn btn-dark' 
                    onClick={() => handleAddCart(props)} 
                    disabled={inCart}
                >
                    {inCart ? "Added to Cart" : "Add to Cart"}
                </button>
            </Card.Body>
        </Card>
    );
}

export default Product;