import axios from "axios";
import { toast } from "react-toastify";
import { createNewFailed, createNewStart, createNewSuccess, loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./MyReducer";
import { getAllUserFailed, getAllUserStart, getAllUserSuccess } from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
    const loginGoogle = localStorage.getItem('dataLogin');
    dispatch(loginStart());
    try {
        const res = await axios.post('http://localhost:3030/users/login', user);
        dispatch(loginSuccess(res.data, loginGoogle))
        navigate('/')
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('dataLogin', JSON.stringify(res.data));
        toast.success('Login Success !')
    } catch (err) {
        dispatch(loginFailed())
        toast.error('Invalid Email or Password !', err)
    }
}
// export const logoutUser = (dispatch) => {
//     dispatch(logout());
//     localStorage.removeItem('loggedIn'); // Xoá trạng thái đăng nhập khỏi local storage
//     document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // Xoá trạng thái đăng nhập khỏi cookie
// localStorage.removeItem('isLoggedIn');
//   };
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post('http://localhost:3030/users/register', user);
        dispatch(registerSuccess);
        navigate('/login')
        toast.success('Register Success !')
    } catch (err) {
        dispatch(registerFailed)
        toast.error('Register Failed !', err)
    }
}

export const createNewUser = async (user, dispatch) => {
    dispatch(createNewStart());
    try {
        await axios.post('http://localhost:3030/users/register', user);
        dispatch(createNewSuccess);
        toast.success('Create new Success !')
    } catch (err) {
        dispatch(createNewFailed)
        toast.error('Create new Failed !', err)
    }
}

export const getAllUsers = async (allUsers, dispatch) => {
    dispatch(getAllUserStart());
    try {
        const res = await axios.get('http://localhost:3030/users', allUsers);
        dispatch(getAllUserSuccess(res.data));
    } catch (err) {
        dispatch(getAllUserFailed)
    }
}