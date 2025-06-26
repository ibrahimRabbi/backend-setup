import mongoose, { Schema } from "mongoose";
import { Tuser } from "./user.interface";
import bcrypt from "bcrypt";


const userSchema = new Schema<Tuser>({
    name: {
        type: String,
        required: [true, "Name is required"],
        maxlength: [15, "Name cannot exceed 15 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address",
        ],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],
    },
    role: {
        type: String,
        enum: {
            values: ["user", "admin"],
            message: "{VALUE} is not a valid role",
        },
        default: "user",
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [0, "Age cannot be negative"],
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });



userSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})

userSchema.pre('find', async function (next) {
    this.find({ isActive: { $ne: true } })
    next();
})



export const userModel = mongoose.model<Tuser>("Users", userSchema);