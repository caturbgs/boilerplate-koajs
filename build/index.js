"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_handler_1 = require("@helpers/error_handler");
const cors_1 = __importDefault(require("@koa/cors"));
const router_1 = __importDefault(require("@koa/router"));
const error_handler_2 = __importDefault(require("@middlewares/error_handler"));
const http_logger_1 = __importDefault(require("@middlewares/http_logger"));
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const config_1 = __importDefault(require("./config"));
const routes_1 = require("./routes");
const app = new koa_1.default();
const router = new router_1.default();
// Example of using custom middleware global
// router.use(customMiddlewareGlobal());
router.get('/', async (ctx) => {
    ctx.body = 'Server is running';
});
// Middlewares
app.use((0, cors_1.default)());
app.use((0, koa_bodyparser_1.default)({
    jsonLimit: '2mb',
}));
(0, routes_1.initializeRoutes)(router);
app.use(http_logger_1.default);
app.use(error_handler_2.default);
app.use(router.routes());
app.use(router.allowedMethods());
// Error handling
app.on("error", (error) => {
    (0, error_handler_1.errorHandler)(error);
});
process.on("uncaughtException", (error) => {
    (0, error_handler_1.errorHandler)(error);
    if (!(0, error_handler_1.isExpectedError)(error)) {
        process.exit(1);
    }
});
process.on("unhandledRejection", (reason) => {
    throw reason;
});
// Start server
app.listen(config_1.default.port, () => {
    console.log(`Server running on port ${config_1.default.port}`);
});
//# sourceMappingURL=index.js.map