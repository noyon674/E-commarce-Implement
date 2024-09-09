import { toast } from 'react-toastify';

export const errorMessage = (message)=>{
    toast.error(`${message}`, {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        theme: "colored",
        });
}

export const successMessage = (message)=>{
    toast.success(`${message}`, {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        theme: "colored",
        });
}