
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchSlice from "./searchSlice";

const appStore= configureStore({
    reducer:{
        app: appReducer,
        search:searchSlice,

        

        
    }
})

export default appStore;