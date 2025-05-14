"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ProductSchema = new mongoose_1.default.Schema({
    productName: String,
    productDescription: String,
    productImage: String,
    productSlug: String,
    productPrice: Number,
    productQuantity: Number,
    productFeatured: Boolean,
    productCategory: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    },
}, { timestamps: true });
var Product = mongoose_1.default.models.Products || mongoose_1.default.model('Products', ProductSchema);
exports.default = Product;
