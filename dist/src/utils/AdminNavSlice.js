"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminNavReducer = exports.setNavActive = exports.AdminNav = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    ActiveNav: 'Base'
};
exports.AdminNav = (0, toolkit_1.createSlice)({
    name: 'AdminNav',
    initialState: initialState,
    reducers: {
        setNavActive: function (state, action) {
            state.ActiveNav = action.payload;
        }
    },
});
// Action creators are generated for each case reducer function
exports.setNavActive = exports.AdminNav.actions.setNavActive;
exports.AdminNavReducer = exports.AdminNav.reducer;
