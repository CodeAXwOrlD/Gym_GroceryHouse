import mongoose from 'mongoose';
var CategorySchema = new mongoose.Schema({
    categoryName: String,
    categoryDescription: String,
    categoryImage: String,
    categorySlug: String
}, { timestamps: true });
var Category = mongoose.models.Categories || mongoose.model('Categories', CategorySchema);
export default Category;
