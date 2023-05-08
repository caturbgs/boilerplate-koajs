"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const userValidator = __importStar(require("validator/user"));
const router = new router_1.default();
// Example of using custom middleware per route
// router.use(customMiddlewarePerRoute());
router.get('/', ...[userValidator.pagingValidator], async (ctx) => {
    const data = [];
    ctx.status = 200;
    ctx.body = {
        message: 'Get all users',
        data
    };
    // Example of using error handler
    // throw new ApplicationError({
    //     message: 'Bad request',
    //     type: ERROR_CODE.InvalidRequest,
    //     httpCode: 400,
    // });
    // Example of error handler with unexpected error
    // throw new Error('Unexpected error');
});
router.get('/:id', ...[userValidator.paramsValidator, userValidator.pagingValidator], async (ctx) => {
    ctx.status = 200;
    ctx.body = 'Get detail user';
});
router.post('/', ...[userValidator.bodyValidator], async (ctx) => {
    // const { name, email } = ctx.request.body as Prisma.userCreateInput;
    // const data = ;
    ctx.status = 200;
    ctx.body = {
        message: 'Success create user',
    };
});
exports.default = router;
//# sourceMappingURL=users.js.map