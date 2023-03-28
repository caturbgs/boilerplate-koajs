import Router from '@koa/router';

const router = new Router();

// router.use(customMiddlewarePerRoute());

router.get('/', async (ctx) => {
    ctx.status = 200;
    ctx.body = 'Get all users';
});

export default router;