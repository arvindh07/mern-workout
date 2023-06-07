import {useState} from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice";

export const useLogin = () => {
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();

    const login = async (email,password) => {
        setError(null);
        setLoading(true);

        const response = await fetch("http://localhost:4001/auth/user/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email,password})
        })
        const resJson = await response.json();

        if(!response.ok){
            setError(resJson.error);
            setLoading(false);
        }
        if(response.ok){
            dispatch(loginUser(resJson));
            localStorage.setItem("user",JSON.stringify(resJson));
            setLoading(false);
        }
    }

    return { login, error, loading };
}
