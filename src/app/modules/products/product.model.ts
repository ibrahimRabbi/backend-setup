import mongoose, { Schema } from "mongoose";
import { Tproduct } from "./product.interface";

const productSchema = new Schema<Tproduct>({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        trim: true,
    },
    price: {
        type: Number,
        required:[true, 'Product price is required'],
        min: [10, 'Product price must be at least 10'],
    },
    category: {
        type: String,
        required: [true, 'Product category is required'],
        trim: true,
    },
    stock: {
        type: Number,
        required: [true, 'Product stock is required'],
        min: [10, 'Product stock cannot be negative'],
    },
    
})

export const productModel = mongoose.model<Tproduct>('products', productSchema);