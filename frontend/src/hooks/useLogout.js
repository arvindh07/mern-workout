import { useDispatch } from "react-redux";
import { logoutUser } from "../features/userSlice";

export const useLogout = () => {
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.removeItem("user");
        dispatch(logoutUser());
    }
    return {logout};
}