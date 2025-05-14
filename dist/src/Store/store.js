'use client';
import { AdminNavReducer } from '@/utils/AdminNavSlice';
import { AdminReducer } from '@/utils/AdminSlice';
import { UserReducer } from '@/utils/UserDataSlice';
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@/utils/CartSlice';
import { bookmarkReducer } from '@/utils/Bookmark';
import { OrderReducer } from '@/utils/OrderSlice';
export var store = configureStore({
    reducer: {
        User: UserReducer,
        AdminNav: AdminNavReducer,
        Admin: AdminReducer,
        Cart: cartReducer,
        Bookmark: bookmarkReducer,
        Order: OrderReducer,
    },
});
