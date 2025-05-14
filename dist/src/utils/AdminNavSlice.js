import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    ActiveNav: 'Base'
};
export var AdminNav = createSlice({
    name: 'AdminNav',
    initialState: initialState,
    reducers: {
        setNavActive: function (state, action) {
            state.ActiveNav = action.payload;
        }
    },
});
// Action creators are generated for each case reducer function
export var setNavActive = AdminNav.actions.setNavActive;
export var AdminNavReducer = AdminNav.reducer;
