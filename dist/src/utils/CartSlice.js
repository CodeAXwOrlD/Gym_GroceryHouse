"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartReducer = exports.setTotalPrice = exports.setCart = exports.cartSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    cart: null,
    total: 0,
};
exports.cartSlice = (0, toolkit_1.createSlice)({
    name: 'Cart',
    initialState: initialState,
    reducers: {
        setCart: function (state, action) {
            state.cart = action.payload;
        },
        setTotalPrice: function (state, action) {
            state.total = action.payload;
        }
    },
});
exports.setCart = (_a = exports.cartSlice.actions, _a.setCart), exports.setTotalPrice = _a.setTotalPrice;
exports.cartReducer = exports.cartSlice.reducer;
