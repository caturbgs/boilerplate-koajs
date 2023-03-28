"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("@koa/cors"));
const router_1 = __importDefault(require("@koa/router"));
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const config_1 = __importDefault(require("./config"));
const routes_1 = require("./routes");
const httpLogger_1 = __importDefault(require("@middlewares/httpLogger"));
const app = new koa_1.default();
const router = new router_1.default();
router.get('/', async (ctx) => {
    ctx.body = 'Server is running!';
});
app.use((0, cors_1.default)());
app.use((0, koa_bodyparser_1.default)({
    jsonLimit: '2mb',
}));
(0, routes_1.initializeRoutes)(router);
app.use(httpLogger_1.default);
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(config_1.default.port, () => {
    console.log(`Server running on port ${config_1.default.port}`);
});
//# sourceMappingURL=index.js.map