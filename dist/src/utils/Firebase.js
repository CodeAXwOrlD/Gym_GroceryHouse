"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
var app_1 = require("firebase/app");
var storage_1 = require("firebase/storage");
var firebaseConfig = {
    apiKey: "AIzaSyAcdzlZMD01e-x9teKIWJD4Rj8IymOLbiA",
    authDomain: "socialapp-9b83f.firebaseapp.com",
    projectId: "socialapp-9b83f",
    storageBucket: "socialapp-9b83f.appspot.com",
    messagingSenderId: "635004374736",
    appId: "1:635004374736:web:b02daf40b9b19856f9d8d5",
    measurementId: "G-PS5QJC1GDC"
};
var app = (0, app_1.initializeApp)(firebaseConfig);
exports.storage = (0, storage_1.getStorage)(app, "gs://socialapp-9b83f.appspot.com");
