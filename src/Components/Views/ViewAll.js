import { Menu } from '@radix-ui/react-menubar';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import HomePage from '../Layout/HomePage';
import MyForgotPsw from '../Layout/MyForgotPsw';
import MyInfo from '../Layout/MyInfo';
import MyList from '../Layout/MyList';
import MyLogin from '../Layout/MyLogin';
import MyRegister from '../Layout/MyRegister';
import MyTodo from '../Layout/MyTodo';
import Dashboard from './Dashboard';
import TabInfo from './TabInfo';

export default function ViewAll() {
    return (
        <div>
            <Menu />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="mytodo" element={<MyTodo />} />
                <Route path="profile" element={<MyInfo />} />
                <Route path="profile/:id/info" element={<TabInfo />} />
                <Route path="todoReudx" element={<MyList />} />
                <Route path="login" element={<MyLogin />} />
                <Route path="register" element={<MyRegister />} />
                <Route path="forgot" element={<MyForgotPsw />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            /></div>
    )
}
