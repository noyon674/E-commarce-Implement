import { ADD_TO_CART, DECRESASE_QUANTITY, DELETE_FROM_CART, INCREASE_QUANTITY, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTRATION_SUCCESS, RESET_STORE } from "../type/type"

const initialState = {
    isAuthenticated: false,
    users: [],
    cartList:[]
}

export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case REGISTRATION_SUCCESS: return{
            ...state,
            users: [...state.users, action.payload]
        }
        case LOGIN_SUCCESS: return{
            ...state,
            isAuthenticated: action.payload
        }
        case LOGOUT_SUCCESS: return{
            ...state,
            isAuthenticated: action.payload
        }
        case ADD_TO_CART: return{
            ...state,
            cartList: [...state.cartList, action.payload]
        }
        case INCREASE_QUANTITY: return{
            ...state,
            cartList: state.cartList.map(cartItem=>(
                cartItem.id == action.payload ? {...cartItem, quantity: cartItem.quantity + 1, totalPrice: (cartItem.quantity + 1)*cartItem.price} : cartItem
            ))
        }
        case DECRESASE_QUANTITY: return{
            ...state,
            cartList: state.cartList.map(cartItem=>(
                cartItem.id == action.payload ? {...cartItem, quantity: cartItem.quantity - 1, totalPrice: (cartItem.quantity - 1)*cartItem.price} : cartItem
            ))
        }
        case DELETE_FROM_CART: return{
            ...state,
            cartList:  state.cartList.filter(item=>item.id != action.payload)
        }
        case RESET_STORE: return{
            isAuthenticated: false,
            users: [],
            cartList: []
        }
        default: return state
    }
}