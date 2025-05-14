"use strict";
"use client";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = __importDefault(require("next/link"));
var react_1 = __importStar(require("react"));
var react_hook_form_1 = require("react-hook-form");
var react_toastify_1 = require("react-toastify");
var react_loader_spinner_1 = require("react-loader-spinner");
var category_1 = require("@/Services/Admin/category");
var navigation_1 = require("next/navigation");
var swr_1 = __importDefault(require("swr"));
var image_1 = __importDefault(require("next/image"));
var react_redux_1 = require("react-redux");
var AdminNavSlice_1 = require("@/utils/AdminNavSlice");
var js_cookie_1 = __importDefault(require("js-cookie"));
function Page(_a) {
    var _this = this;
    var params = _a.params, searchParams = _a.searchParams;
    var _b = (0, react_1.useState)(false), loader = _b[0], setLoader = _b[1];
    var Router = (0, navigation_1.useRouter)();
    var dispatch = (0, react_redux_1.useDispatch)();
    var _c = (0, react_1.useState)(undefined), catData = _c[0], setCatData = _c[1];
    (0, react_1.useEffect)(function () {
        var user = JSON.parse(localStorage.getItem('user') || '{}');
        if (!js_cookie_1.default.get('token') || (user === null || user === void 0 ? void 0 : user.role) !== 'admin') {
            Router.push('/');
        }
        dispatch((0, AdminNavSlice_1.setNavActive)('Base'));
    }, [dispatch, js_cookie_1.default, Router]);
    var _d = (0, swr_1.default)('/gettingAllCategoriesFOrAdmin', function () { return (0, category_1.get_category_by_id)(params.id); }), data = _d.data, isLoading = _d.isLoading;
    if ((data === null || data === void 0 ? void 0 : data.success) !== true)
        react_toastify_1.toast.error(data === null || data === void 0 ? void 0 : data.message);
    (0, react_1.useEffect)(function () {
        setCatData(data === null || data === void 0 ? void 0 : data.data);
    }, [data]);
    var _e = (0, react_hook_form_1.useForm)({
        criteriaMode: "all"
    }), register = _e.register, setValue = _e.setValue, errors = _e.formState.errors, handleSubmit = _e.handleSubmit;
    var setValueofFormData = (0, react_1.useCallback)(function () {
        var _a, _b, _c;
        setValue('name', (_a = catData === null || catData === void 0 ? void 0 : catData.categoryName) !== null && _a !== void 0 ? _a : '');
        setValue('description', (_b = catData === null || catData === void 0 ? void 0 : catData.categoryDescription) !== null && _b !== void 0 ? _b : '');
        setValue('slug', (_c = catData === null || catData === void 0 ? void 0 : catData.categorySlug) !== null && _c !== void 0 ? _c : '');
    }, [catData]);
    (0, react_1.useEffect)(function () {
        if (catData) {
            setValueofFormData();
        }
    }, [catData]);
    var onSubmit = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var updatedData, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoader(false);
                    updatedData = {
                        _id: params.id,
                        name: data.name !== (catData === null || catData === void 0 ? void 0 : catData.categoryName) ? data.name : catData === null || catData === void 0 ? void 0 : catData.categoryName,
                        description: data.description !== (catData === null || catData === void 0 ? void 0 : catData.categoryDescription) ? data.description : catData === null || catData === void 0 ? void 0 : catData.categoryDescription,
                        slug: data.slug !== (catData === null || catData === void 0 ? void 0 : catData.categorySlug) ? data.slug : catData === null || catData === void 0 ? void 0 : catData.categorySlug,
                    };
                    return [4 /*yield*/, (0, category_1.update_a_category)(updatedData)];
                case 1:
                    res = _a.sent();
                    if (res === null || res === void 0 ? void 0 : res.success) {
                        react_toastify_1.toast.success(res === null || res === void 0 ? void 0 : res.message);
                        dispatch((0, AdminNavSlice_1.setNavActive)('Base'));
                        setTimeout(function () {
                            Router.push("/Dashboard");
                        }, 2000);
                        setLoader(false);
                    }
                    else {
                        react_toastify_1.toast.error(res === null || res === void 0 ? void 0 : res.message);
                        setLoader(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (<div className='w-full dark:text-black p-4 min-h-screen  bg-gray-50 flex flex-col '>
            <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
                <ul>
                    <li onClick={function () { return dispatch((0, AdminNavSlice_1.setNavActive)('Base')); }}>
                        <link_1.default href={'/Dashboard'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </link_1.default>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Update Category
                    </li>
                </ul>
            </div>
            <div className='w-full h-20 my-2 text-center'>
                <h1 className='text-2xl py-2 '>Update Category</h1>
            </div>
            {isLoading || loader ? (<div className='w-full  flex-col h-96 flex items-center justify-center '>
                        <react_loader_spinner_1.TailSpin height="50" width="50" color="orange" ariaLabel="tail-spin-loading" radius="1" wrapperStyle={{}} wrapperClass="" visible={true}/>
                        <p className='text-sm mt-2 font-semibold text-orange-500'>updating Category Hold Tight ....</p>
                    </div>) : (<div className='w-full h-full flex items-start justify-center'>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg  py-2 flex-col ">
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Category Name</span>
                                </label>
                                <input {...register("name")} type="text" placeholder="Type here" className="input input-bordered w-full"/>
                                {errors.name && <span className='text-red-500 text-xs mt-2'>This field is required</span>}
                            </div>
                            <div className="form-control w-full mb-2">
                                <label className="label">
                                    <span className="label-text">Category Slug</span>
                                </label>
                                <input {...register("slug")} type="text" placeholder="Type here" className="input input-bordered w-full"/>
                                {errors.slug && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category Description</span>
                                </label>
                                <textarea {...register("description")} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
                                {errors.description && <span className='text-red-500 text-xs mt-2'>This field is required</span>}

                            </div>
                            {catData && (<div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Old Image</span>
                                        </label>
                                        <image_1.default src={(catData === null || catData === void 0 ? void 0 : catData.categoryImage) || ""} alt='No Image Found' width={200} height={200}/>

                                    </div>)}

                            <button className='btn btn-block mt-3'>Done !</button>

                        </form>
                    </div>)}

            <react_toastify_1.ToastContainer />
        </div>);
}
exports.default = Page;
