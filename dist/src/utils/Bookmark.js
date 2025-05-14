"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookmarkReducer = exports.setBookmark = exports.BookmarkSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    bookmark: [],
};
exports.BookmarkSlice = (0, toolkit_1.createSlice)({
    name: 'Bookmark',
    initialState: initialState,
    reducers: {
        setBookmark: function (state, action) {
            state.bookmark = action.payload;
        },
    },
});
exports.setBookmark = exports.BookmarkSlice.actions.setBookmark;
exports.bookmarkReducer = exports.BookmarkSlice.reducer;
