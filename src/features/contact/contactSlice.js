import { createSlice } from "@reduxjs/toolkit"

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contact: []
    },
    reducers: {
        addContact: (state, action) =>{
            state.contact.push(action.payload)
        }
    }
})


export const {addContact} = contactSlice.actions;
export default contactSlice.reducer;