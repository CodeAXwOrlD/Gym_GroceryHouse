var _a;
import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    category: [],
    catLoading: false,
    productLoading: false,
    product: [],
    Order: [],
    orderLoading: false,
};
export var Admin = createSlice({
    name: 'AdminData',
    initialState: initialState,
    reducers: {
        setCategoryData: function (state, action) {
            state.category = action.payload;
        },
        setProductData: function (state, action) {
            state.product = action.payload;
        },
        setCatLoading: function (state, action) {
            state.catLoading = action.payload;
        },
        setProdLoading: function (state, action) {
            state.productLoading = action.payload;
        },
        setOrderData: function (state, action) {
            state.Order = action.payload;
        },
        setOrderLoading: function (state, action) {
            state.orderLoading = action.payload;
        }
    },
});
// Action creators are generated for each case reducer function
export var setCategoryData = (_a = Admin.actions, _a.setCategoryData), setCatLoading = _a.setCatLoading, setProdLoading = _a.setProdLoading, setProductData = _a.setProductData, setOrderData = _a.setOrderData, setOrderLoading = _a.setOrderLoading;
export var AdminReducer = Admin.reducer;
