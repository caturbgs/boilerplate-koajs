import { Prisma, prismaClient } from '@config/database';
import Router from '@koa/router';
import * as userValidator from 'validator/user';

const router = new Router();

// Example of using custom middleware per route
// router.use(customMiddlewarePerRoute());

router.get('/', ...[userValidator.pagingValidator], async (ctx) => {
    const data = await prismaClient.user.findMany();

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
    const { name, email } = ctx.request.body as Prisma.userCreateInput;

    const data = await prismaClient.user.create({
        data: {
            name: name,
            email: email,
        }
    });

    ctx.status = 200;
    ctx.body = {
        message: 'Success create user',
    };
});

export default router;