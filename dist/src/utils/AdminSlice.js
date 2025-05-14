"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminReducer = exports.setOrderLoading = exports.setOrderData = exports.setProductData = exports.setProdLoading = exports.setCatLoading = exports.setCategoryData = exports.Admin = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    category: [],
    catLoading: false,
    productLoading: false,
    product: [],
    Order: [],
    orderLoading: false,
};
exports.Admin = (0, toolkit_1.createSlice)({
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
exports.setCategoryData = (_a = exports.Admin.actions, _a.setCategoryData), exports.setCatLoading = _a.setCatLoading, exports.setProdLoading = _a.setProdLoading, exports.setProductData = _a.setProductData, exports.setOrderData = _a.setOrderData, exports.setOrderLoading = _a.setOrderLoading;
exports.AdminReducer = exports.Admin.reducer;
