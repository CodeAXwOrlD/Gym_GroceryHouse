"use strict";
"use Client";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var swr_1 = require("swr");
var react_data_table_component_1 = __importDefault(require("react-data-table-component"));
var react_redux_1 = require("react-redux");
var navigation_1 = require("next/navigation");
function CompletedOrderDataTable() {
    var mutate = (0, swr_1.useSWRConfig)().mutate;
    var router = (0, navigation_1.useRouter)();
    var _a = (0, react_1.useState)([]), orderData = _a[0], setOrderData = _a[1];
    var data = (0, react_redux_1.useSelector)(function (state) { return state.Admin.Order; });
    var _b = (0, react_1.useState)(''), search = _b[0], setSearch = _b[1];
    var _c = (0, react_1.useState)([]), filteredData = _c[0], setFilteredData = _c[1];
    (0, react_1.useEffect)(function () {
        var filteredCompletedOrder = data === null || data === void 0 ? void 0 : data.filter(function (item) { return (item === null || item === void 0 ? void 0 : item.isDelivered) === true; });
        setOrderData(filteredCompletedOrder);
    }, [data]);
    (0, react_1.useEffect)(function () {
        setFilteredData(orderData);
    }, [orderData]);
    var columns = [
        {
            name: 'Order ID',
            selector: function (row) { return row === null || row === void 0 ? void 0 : row._id; },
            sortable: true,
        },
        {
            name: 'Total Price',
            selector: function (row) { return row === null || row === void 0 ? void 0 : row.totalPrice; },
            sortable: true,
        },
        {
            name: 'Delivered',
            selector: function (row) { return (row === null || row === void 0 ? void 0 : row.isDelivered) ? 'Yes' : 'No'; },
            sortable: true,
        },
        {
            name: 'Action',
            cell: function (row) { return (<button onClick={function () { return router.push("/order/view-orders-details/".concat(row === null || row === void 0 ? void 0 : row._id)); }} className=' w-20 py-2 mx-2 text-xs text-green-600 hover:text-white my-2 hover:bg-green-600 border border-green-600 rounded transition-all duration-700'>Details</button>); }
        },
    ];
    (0, react_1.useEffect)(function () {
        if (search === '') {
            setFilteredData(orderData);
        }
        else {
            setFilteredData(orderData === null || orderData === void 0 ? void 0 : orderData.filter(function (item) {
                var _a;
                var itemData = (_a = item === null || item === void 0 ? void 0 : item._id) === null || _a === void 0 ? void 0 : _a.toUpperCase();
                var textData = search.toUpperCase();
                return itemData.indexOf(textData) > -1;
            }));
        }
    }, [search, orderData]);
    return (<div className='w-full h-full'>
      <react_data_table_component_1.default columns={columns} data={filteredData || []} key={'ThisOrdersData'} pagination keyField="id" title={"Orders list"} fixedHeader fixedHeaderScrollHeight='700px' selectableRows selectableRowsHighlight persistTableHead subHeader subHeaderComponent={<input className='w-60 dark:bg-transparent py-2 px-2  outline-none  border-b-2 border-orange-600' type={"search"} value={search} onChange={function (e) { return setSearch(e.target.value); }} placeholder={"Orders ID"}/>} className="bg-white px-4 h-5/6 "/>

    </div>);
}
exports.default = CompletedOrderDataTable;
