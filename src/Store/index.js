
import { configureStore } from "@reduxjs/toolkit";
import myListReducer from "./MyReducer";
import userReducer from "./userSlice";

//store
const store = configureStore({
    reducer: {
        myListReducer: myListReducer,
        userReducer: userReducer
    }
})


//export store
export default store