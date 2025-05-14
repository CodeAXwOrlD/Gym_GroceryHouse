import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    order: [],
};
export var OrderSlice = createSlice({
    name: 'Order',
    initialState: initialState,
    reducers: {
        setOrder: function (state, action) {
            state.order = action.payload;
        },
    },
});
export var setOrder = OrderSlice.actions.setOrder;
export var OrderReducer = OrderSlice.reducer;
