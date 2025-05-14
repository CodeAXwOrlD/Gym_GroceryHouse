"use strict";
'use client';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_loader_spinner_1 = require("react-loader-spinner");
function Loading() {
    return (<div className='w-full  flex-col min-h-full h-screen flex items-center justify-center '>
            <react_loader_spinner_1.TailSpin height="50" width="50" color="orange" ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass="" visible={true}/>
            <p className='text-sm mt-2 font-semibold text-orange-500'>Loading Hold Tight ....</p>
        </div>);
}
exports.default = Loading;
