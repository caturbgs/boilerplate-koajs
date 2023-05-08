"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: process.env.PORT || 3000,
    showErrorStack: (_a = process.env.SHOW_ERROR_STACK) !== null && _a !== void 0 ? _a : true,
};
//# sourceMappingURL=index.js.map