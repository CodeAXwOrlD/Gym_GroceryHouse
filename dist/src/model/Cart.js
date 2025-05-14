"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var CartSchema = new mongoose_1.default.Schema({
    userID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
    productID: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Products',
    },
    quantity: {
        type: Number,
        required: true,
        default: 1,
    },
}, { timestamps: true });
var Cart = mongoose_1.default.models.Cart || mongoose_1.default.model('Cart', CartSchema);
exports.default = Cart;
