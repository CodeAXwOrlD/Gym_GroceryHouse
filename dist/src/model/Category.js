"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var CategorySchema = new mongoose_1.default.Schema({
    categoryName: String,
    categoryDescription: String,
    categoryImage: String,
    categorySlug: String
}, { timestamps: true });
var Category = mongoose_1.default.models.Categories || mongoose_1.default.model('Categories', CategorySchema);
exports.default = Category;
