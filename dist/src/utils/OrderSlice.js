"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReducer = exports.setOrder = exports.OrderSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    order: [],
};
exports.OrderSlice = (0, toolkit_1.createSlice)({
    name: 'Order',
    initialState: initialState,
    reducers: {
        setOrder: function (state, action) {
            state.order = action.payload;
        },
    },
});
exports.setOrder = exports.OrderSlice.actions.setOrder;
exports.OrderReducer = exports.OrderSlice.reducer;
