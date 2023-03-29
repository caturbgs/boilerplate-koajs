import { validator } from "@middlewares/validator";

const pagingValidator = validator.query({
    limit: { type: "number", positive: true, integer: true, optional: true, convert: true },
    offset: { type: "number", positive: true, integer: true, optional: true, convert: true },
});

const paramsValidator = validator.params({
    id: { type: "number", positive: true, integer: true, convert: true }
});

export { pagingValidator, paramsValidator };
