"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Providers = void 0;
var store_1 = require("./store");
var react_redux_1 = require("react-redux");
function Providers(_a) {
    var children = _a.children;
    return (<react_redux_1.Provider store={store_1.store}>
      {children}
    </react_redux_1.Provider>);
}
exports.Providers = Providers;
