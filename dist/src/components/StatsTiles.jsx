"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ai_1 = require("react-icons/ai");
var gi_1 = require("react-icons/gi");
var gr_1 = require("react-icons/gr");
var fa_1 = require("react-icons/fa");
var cg_1 = require("react-icons/cg");
var tfi_1 = require("react-icons/tfi");
function StatsTiles(_a) {
    var Icon = _a.Icon, title = _a.title, count = _a.count;
    return (<div className='w-96 h-40 m-2 dark:text-black cursor-pointer hover:shadow-xl transition-all duration-500 bg-white rounded flex flex-col items-center justify-center'>
            {Icon === 'GrCompliance' && <gr_1.GrCompliance className='text-3xl text-orange-600'/>}
            {Icon === 'GrUser' && <gr_1.GrUser className='text-3xl text-orange-600'/>}
            {Icon === 'GiAbstract010' && <gi_1.GiAbstract010 className='text-3xl text-orange-600'/>}
            {Icon === 'AiOutlineClockCircle' && <ai_1.AiOutlineClockCircle className='text-3xl text-orange-600'/>}
            {Icon === 'FaUserAlt' && <fa_1.FaUserAlt className='text-3xl text-orange-600'/>}
            {Icon === 'CgMenuGridR' && <cg_1.CgMenuGridR className='text-3xl text-orange-600'/>}
            {Icon === 'TfiStatsUp' && <tfi_1.TfiStatsUp className='text-3xl text-orange-600'/>}
            <p className="text-sm mt-1">{title}</p>
            <p className="text-2xl mt-2 font-bold">{count}</p>
        </div>);
}
exports.default = StatsTiles;
