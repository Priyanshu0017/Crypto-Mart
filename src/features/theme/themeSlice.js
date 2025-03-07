import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name : "theme",
    initialState : {
        theme : false
    },
    reducers : {
        changeTheme : (state) => {
            return {
                ...state,
                theme : state.theme ? false : true
            }
        }
    }
})

export const {changeTheme} = themeSlice.actions

export default themeSlice.reducer
