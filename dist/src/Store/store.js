"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var AdminNavSlice_1 = require("@/utils/AdminNavSlice");
var AdminSlice_1 = require("@/utils/AdminSlice");
var UserDataSlice_1 = require("@/utils/UserDataSlice");
var toolkit_1 = require("@reduxjs/toolkit");
var CartSlice_1 = require("@/utils/CartSlice");
var Bookmark_1 = require("@/utils/Bookmark");
var OrderSlice_1 = require("@/utils/OrderSlice");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        User: UserDataSlice_1.UserReducer,
        AdminNav: AdminNavSlice_1.AdminNavReducer,
        Admin: AdminSlice_1.AdminReducer,
        Cart: CartSlice_1.cartReducer,
        Bookmark: Bookmark_1.bookmarkReducer,
        Order: OrderSlice_1.OrderReducer,
    },
});
