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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const envData_1 = __importDefault(require("./app/config/envData"));
const globalError_1 = require("./app/middleware/globalError");
const notFound_1 = require("./app/middleware/notFound");
const routes_1 = require("./app/routes");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1', routes_1.router);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connect('mongodb://localhost:27017/practice');
        app.listen(envData_1.default.port, () => {
            console.log(`Server is running on port ${envData_1.default.port} in ${envData_1.default.nodeEnv} mode`);
        });
    });
}
main().catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
});
app.use(globalError_1.globalError);
app.use(notFound_1.notFound);
