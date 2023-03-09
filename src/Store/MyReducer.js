import { createSlice } from "@reduxjs/toolkit";
const myListSlice = createSlice({
    name: 'myList',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false
        },
        // logout: {
        //     currentUser: null,
        //     isFetching: false,
        //     error: false
        // },
        register: {
            isFetching: false,
            error: false,
            success: false
        },
        createNew: {
            isFetching: false,
            error: false,
            success: false
        }
    },
    reducers: {
        addList: {
            reducer(state, action) {
                state.allMyList.unshift(action.payload)
            },
            prepare(name, username, title, email, image) {
                return {
                    payload: {
                        id: Math.random(),
                        name,
                        username,
                        title,
                        email,
                        image
                    }
                }
            }
        },
        editList: (state, action) => {
            const todoId = action.payload
            state.allMyList = state.allMyList.map((todo) => todo.id === todoId.id ? todoId : todo)
        },
        deleteTodo(state, action) {
            const todoId = action.payload
            state.allMyList = state.allMyList.filter(todo => todo.id !== todoId)
            // console.log('check state:', state.allMyList);
        },
        //===========================================//
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
        //=============================================//
        // logoutStart: (state) => {
        //     state.logout.isFetching = true;
        // },
        // logoutSuccess: (state, action) => {
        //     state.logout.isFetching = false;
        //     state.logout.currentUser = action.payload;
        //     state.logout.error = false;
        // },
        // logoutFailed: (state) => {
        //     state.logout.isFetching = false;
        //     state.logout.error = true;
        // },
        //=============================================//
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },
        //=============================================//
        // logoutStart: (state) => {
        //     state.logout.isFetching = true;
        // },
        // logoutSuccess: (state, action) => {
        //     state.logout.isFetching = false;
        //     state.logout.currentUser = action.payload;
        //     state.logout.error = false;
        // },
        // logoutFailed: (state) => {
        //     state.logout.isFetching = false;
        //     state.logout.error = true;
        // },
        //=============================================//
        createNewStart: (state) => {
            state.createNew.isFetching = true;
        },
        createNewSuccess: (state, action) => {
            state.createNew.isFetching = false;
            state.createNew.error = false;
            state.createNew.success = true;
        },
        createNewFailed: (state) => {
            state.createNew.isFetching = false;
            state.createNew.error = true;
            state.createNew.success = false;
        },
    },
});

//Reducer
const myListReducer = myListSlice.reducer


//Selector
export const myListSelector = state => state.myListReducer.allMyList
//export action
export const { addList, deleteTodo, editList,
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    createNewStart,
    createNewSuccess,
    createNewFailed, } = myListSlice.actions
export default myListReducer