"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = exports.log = void 0;
const pino_1 = __importDefault(require("pino"));
exports.log = (0, pino_1.default)();
function createLogger(type, config) {
    return exports.log.child(Object.assign({ type }, config));
}
exports.createLogger = createLogger;
//# sourceMappingURL=logger.js.map