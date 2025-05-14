"use strict";
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
exports.PUT = void 0;
var connectDB_1 = __importDefault(require("@/DB/connectDB"));
var AuthCheck_1 = __importDefault(require("@/middleware/AuthCheck"));
var server_1 = require("next/server");
var Product_1 = __importDefault(require("@/model/Product"));
function PUT(req) {
    return __awaiter(this, void 0, void 0, function () {
        var isAuthenticated, data, name_1, _id, description, slug, feature, quantity, price, categoryID, saveData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    return [4 /*yield*/, (0, connectDB_1.default)()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, AuthCheck_1.default)(req)];
                case 2:
                    isAuthenticated = _a.sent();
                    if (!(isAuthenticated === 'admin')) return [3 /*break*/, 5];
                    return [4 /*yield*/, req.json()];
                case 3:
                    data = _a.sent();
                    name_1 = data.name, _id = data._id, description = data.description, slug = data.slug, feature = data.feature, quantity = data.quantity, price = data.price, categoryID = data.categoryID;
                    return [4 /*yield*/, Product_1.default.findOneAndUpdate(_id, { productName: name_1, productDescription: description, productSlug: slug, productPrice: price, productQuantity: quantity, productCategory: categoryID }, { new: true })];
                case 4:
                    saveData = _a.sent();
                    if (saveData) {
                        return [2 /*return*/, server_1.NextResponse.json({ success: true, message: "product  updated successfully!" })];
                    }
                    else {
                        return [2 /*return*/, server_1.NextResponse.json({ success: false, message: "Failed to update the product . Please try again!" })];
                    }
                    return [3 /*break*/, 6];
                case 5: return [2 /*return*/, server_1.NextResponse.json({ success: false, message: "You are not authorized." })];
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_1 = _a.sent();
                    console.log('Error in update a new product :', error_1);
                    return [2 /*return*/, server_1.NextResponse.json({ success: false, message: 'Something went wrong. Please try again!' })];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.PUT = PUT;
