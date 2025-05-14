var _a;
import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    userData: null,
    userToken: null,
};
export var userSlice = createSlice({
    name: 'User',
    initialState: initialState,
    reducers: {
        setUserData: function (state, action) {
            state.userData = action.payload;
        },
        setUserToken: function (state, action) {
            state.userToken = action.payload;
        }
    },
});
// Action creators are generated for each case reducer function
export var setUserData = (_a = userSlice.actions, _a.setUserData), setUserToken = _a.setUserToken;
export var UserReducer = userSlice.reducer;
