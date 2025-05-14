"use Client";
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
import React, { useEffect, useState } from 'react';
import { useSWRConfig } from "swr";
import { toast } from 'react-toastify';
import DataTable from 'react-data-table-component';
import Image from 'next/image';
import Loading from '@/app/loading';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { delete_a_product } from '@/Services/Admin/product';
export default function ProductDataTable() {
    var _this = this;
    var mutate = useSWRConfig().mutate;
    var router = useRouter();
    var _a = useState([]), prodData = _a[0], setprodData = _a[1];
    var data = useSelector(function (state) { return state.Admin.product; });
    var isLoading = useSelector(function (state) { return state.Admin.productLoading; });
    var _b = useState(''), search = _b[0], setSearch = _b[1];
    var _c = useState([]), filteredData = _c[0], setFilteredData = _c[1];
    useEffect(function () {
        setprodData(data);
    }, [data]);
    useEffect(function () {
        setFilteredData(prodData);
    }, [prodData]);
    var columns = [
        {
            name: 'Name',
            selector: function (row) { return row === null || row === void 0 ? void 0 : row.productName; },
            sortable: true,
        },
        {
            name: 'Category',
            selector: function (row) { var _a; return (_a = row === null || row === void 0 ? void 0 : row.productCategory) === null || _a === void 0 ? void 0 : _a.categoryName; },
            sortable: true,
        },
        {
            name: 'Image',
            cell: function (row) { return <Image src={row === null || row === void 0 ? void 0 : row.productImage} alt='No Image Found' className='py-2' width={100} height={100}/>; }
        },
        {
            name: 'Action',
            cell: function (row) { return (<div className='flex items-center justify-start px-2 h-20'>
          <button onClick={function () { return router.push("/product/update-product/".concat(row === null || row === void 0 ? void 0 : row._id)); }} className=' w-20 py-2 mx-2 text-xs text-green-600 hover:text-white my-2 hover:bg-green-600 border border-green-600 rounded transition-all duration-700'>Update</button>
          <button onClick={function () { return handleDeleteProduct(row === null || row === void 0 ? void 0 : row._id); }} className=' w-20 py-2 mx-2 text-xs text-red-600 hover:text-white my-2 hover:bg-red-600 border border-red-600 rounded transition-all duration-700'>Delete</button>
        </div>); }
        },
    ];
    var handleDeleteProduct = function (id) { return __awaiter(_this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delete_a_product(id)];
                case 1:
                    res = _a.sent();
                    if (res === null || res === void 0 ? void 0 : res.success) {
                        toast.success(res === null || res === void 0 ? void 0 : res.message);
                        mutate('/gettingAllProductsFOrAdmin');
                    }
                    else {
                        toast.error(res === null || res === void 0 ? void 0 : res.message);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        if (search === '') {
            setFilteredData(prodData);
        }
        else {
            setFilteredData(prodData === null || prodData === void 0 ? void 0 : prodData.filter(function (item) {
                var _a;
                var itemData = (_a = item === null || item === void 0 ? void 0 : item.productCategory) === null || _a === void 0 ? void 0 : _a.categoryName.toUpperCase();
                var textData = search.toUpperCase();
                return itemData.indexOf(textData) > -1;
            }));
        }
    }, [search, prodData]);
    return (<div className='w-full h-full'>
      <DataTable columns={columns} data={filteredData || []} key={'ThisProductData'} pagination keyField="id" title={"Products list"} fixedHeader fixedHeaderScrollHeight='500px' selectableRows selectableRowsHighlight persistTableHead progressPending={isLoading} progressComponent={<Loading />} subHeader subHeaderComponent={<input className='w-60 dark:bg-transparent py-2 px-2  outline-none  border-b-2 border-orange-600' type={"search"} value={search} onChange={function (e) { return setSearch(e.target.value); }} placeholder={"Category Name"}/>} className="bg-white px-4 h-4/6 "/>

    </div>);
}
