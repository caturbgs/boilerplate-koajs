import { validator } from "@middlewares/validator";

const pagingValidator = validator.query({
    limit: { type: "number", positive: true, integer: true, optional: true, convert: true },
    offset: { type: "number", positive: true, integer: true, optional: true, convert: true },
});

const paramsValidator = validator.params({
    id: { type: "number", positive: true, integer: true, convert: true }
});

const bodyValidator = validator.body({
    name: { type: "string", min: 10, max: 255 },
    email: { type: "email" },
});

export { pagingValidator, paramsValidator, bodyValidator };

