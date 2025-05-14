"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserReducer = exports.setUserToken = exports.setUserData = exports.userSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    userData: null,
    userToken: null,
};
exports.userSlice = (0, toolkit_1.createSlice)({
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
exports.setUserData = (_a = exports.userSlice.actions, _a.setUserData), exports.setUserToken = _a.setUserToken;
exports.UserReducer = exports.userSlice.reducer;
