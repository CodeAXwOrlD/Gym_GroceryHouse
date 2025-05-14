import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    bookmark: [],
};
export var BookmarkSlice = createSlice({
    name: 'Bookmark',
    initialState: initialState,
    reducers: {
        setBookmark: function (state, action) {
            state.bookmark = action.payload;
        },
    },
});
export var setBookmark = BookmarkSlice.actions.setBookmark;
export var bookmarkReducer = BookmarkSlice.reducer;
