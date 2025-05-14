var _a;
import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    cart: null,
    total: 0,
};
export var cartSlice = createSlice({
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
export var setCart = (_a = cartSlice.actions, _a.setCart), setTotalPrice = _a.setTotalPrice;
export var cartReducer = cartSlice.reducer;
