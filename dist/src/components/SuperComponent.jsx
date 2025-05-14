"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamic = void 0;
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var TileContainer_1 = __importDefault(require("./TileContainer"));
var ProductDataTable_1 = __importDefault(require("./ProductDataTable"));
var CategoryDataTable_1 = __importDefault(require("./CategoryDataTable"));
var PendingOrdersDataTable_1 = __importDefault(require("./PendingOrdersDataTable"));
var CompletedOrderDataTable_1 = __importDefault(require("./CompletedOrderDataTable"));
function SuperComponent() {
    var navActive = (0, react_redux_1.useSelector)(function (state) { return state.AdminNav.ActiveNav; });
    switch (navActive) {
        case 'Base':
            return <TileContainer_1.default />;
        case 'activeProducts':
            return <ProductDataTable_1.default />;
        case 'activeCategories':
            return <CategoryDataTable_1.default />;
        case 'activePendingOrder':
            return <PendingOrdersDataTable_1.default />;
        case 'activeDeliveredOrder':
            return <CompletedOrderDataTable_1.default />;
        default:
            return <TileContainer_1.default />;
    }
}
exports.default = SuperComponent;
exports.dynamic = 'force-dynamic';
