import { 
    ADD_TO_CART,
    DECRESASE_QUANTITY,
    DELETE_FROM_CART,
    INCREASE_QUANTITY,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTRATION_SUCCESS,
    RESET_STORE, } from "../type/type"

export const registration_success = (userData)=>{
    return {
        type: REGISTRATION_SUCCESS,
        payload: userData
    }
}

export const login_success = (token)=>{
    return {
        type: LOGIN_SUCCESS,
        payload: token
    }
}

export const logout_success = (token)=>{
    return {
        type: LOGOUT_SUCCESS,
        payload: token
    }
}

export const add_to_cart = (product)=>{
    const updateProductStatus = {
        id: product.id,
        title: product.title,
        price: product.price,
        totalPrice: product.price,
        image: product.image,
        quantity: product.quantity,
        inCart: true
    }
    return {
        type: ADD_TO_CART,
        payload: updateProductStatus
    }
}

export const increase_quantity = (id)=>{
    return {
        type: INCREASE_QUANTITY,
        payload: id
    }
}

export const decrease_quantity = (id)=>{
    return {
        type: DECRESASE_QUANTITY,
        payload: id
    }
}

export const delete_from_cart = (id)=>{
    return {
        type: DELETE_FROM_CART,
        payload: id
    }
}

export const reset = ()=>{
    return {
        type: RESET_STORE,
    }
}