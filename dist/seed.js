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
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var mongoose, dotenv, Category, Product, MONGODB_URI, categories, products, insertedCategories, insertedProducts, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mongoose = require('mongoose');
                dotenv = require('dotenv');
                dotenv.config({ path: '.env.local' });
                Category = require('./src/model/Category').default;
                Product = require('./src/model/Product').default;
                MONGODB_URI = process.env.DB_URI;
                categories = [
                    {
                        categoryName: 'Fruits',
                        categoryDescription: 'Fresh and organic fruits',
                        categoryImage: '/fruits.jpg',
                        categorySlug: 'fruits',
                    },
                    {
                        categoryName: 'Vegetables',
                        categoryDescription: 'Green and healthy vegetables',
                        categoryImage: '/vegetables.jpg',
                        categorySlug: 'vegetables',
                    },
                ];
                products = [
                    {
                        productName: 'Apple',
                        productDescription: 'Red delicious apples',
                        productImage: '/apple.jpg',
                        productSlug: 'apple',
                        productPrice: 2.5,
                        productQuantity: 100,
                        productFeatured: true,
                        productCategory: null, // to be set after category insert
                    },
                    {
                        productName: 'Carrot',
                        productDescription: 'Organic carrots',
                        productImage: '/carrot.jpg',
                        productSlug: 'carrot',
                        productPrice: 1.2,
                        productQuantity: 200,
                        productFeatured: false,
                        productCategory: null, // to be set after category insert
                    },
                ];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                return [4 /*yield*/, mongoose.connect(MONGODB_URI)];
            case 2:
                _a.sent();
                console.log('Connected to MongoDB');
                return [4 /*yield*/, Category.deleteMany({})];
            case 3:
                _a.sent();
                return [4 /*yield*/, Product.deleteMany({})];
            case 4:
                _a.sent();
                return [4 /*yield*/, Category.insertMany(categories)];
            case 5:
                insertedCategories = _a.sent();
                console.log('Inserted categories:', insertedCategories);
                products[0].productCategory = insertedCategories[0]._id;
                products[1].productCategory = insertedCategories[1]._id;
                return [4 /*yield*/, Product.insertMany(products)];
            case 6:
                insertedProducts = _a.sent();
                console.log('Inserted products:', insertedProducts);
                return [4 /*yield*/, mongoose.disconnect()];
            case 7:
                _a.sent();
                console.log('Database disconnected');
                return [3 /*break*/, 9];
            case 8:
                err_1 = _a.sent();
                console.error('Seeding error:', err_1);
                mongoose.disconnect();
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); })();
