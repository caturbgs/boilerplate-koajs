"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = exports.paramsValidator = exports.pagingValidator = void 0;
const validator_1 = require("@middlewares/validator");
const pagingValidator = validator_1.validator.query({
    limit: { type: "number", positive: true, integer: true, optional: true, convert: true },
    offset: { type: "number", positive: true, integer: true, optional: true, convert: true },
});
exports.pagingValidator = pagingValidator;
const paramsValidator = validator_1.validator.params({
    id: { type: "number", positive: true, integer: true, convert: true }
});
exports.paramsValidator = paramsValidator;
const bodyValidator = validator_1.validator.body({
    name: { type: "string", min: 10, max: 255 },
    email: { type: "email" },
});
exports.bodyValidator = bodyValidator;
//# sourceMappingURL=user.js.map