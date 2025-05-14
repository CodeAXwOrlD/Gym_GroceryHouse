"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var link_1 = __importDefault(require("next/link"));
var react_1 = __importDefault(require("react"));
function Hero(_a) {
    var setRatio = _a.setRatio;
    return (<div className='w-full h-screen relative'>
      <image_1.default src={'/intro.jpg'} alt='no Image' fill className="w-full h-full object-fill hidden md:block " onLoadingComplete={function (_a) {
            var naturalWidth = _a.naturalWidth, naturalHeight = _a.naturalHeight;
            return setRatio(naturalWidth / naturalHeight);
        }}/>
      <div className='w-full flex-col md:hidden h-full relative flex items-center px-3 justify-center text-center'>
        <image_1.default src={'/mob-intro.jpg'} alt='no image' fill/>

        <h1 className='mb-2 text-xl text-white/90 z-10 font-semibold '>Work hard, lift harder - Get fit, feel fitter with our gear!</h1>
        <link_1.default href={"/#my-Categories"} className='btn btn-ghost border border-orange-600 text-white/90 hover:bg-orange-600  z-40'>Shop Now</link_1.default>


      </div>
    </div>);
}
exports.default = Hero;
