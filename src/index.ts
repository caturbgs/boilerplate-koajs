import cors from '@koa/cors';
import Router from '@koa/router';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import config from './config';
import { initializeRoutes } from './routes';
import initializeHttpLogger from '@middlewares/httpLogger';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = 'Server is running!';
});

app.use(cors());
app.use(bodyParser({
    jsonLimit: '2mb',
}));
initializeRoutes(router);
app.use(initializeHttpLogger);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});

// TODO: add error handler
// process.on("uncaughtException", async (error) => {
//     await errorHandler(error);

//     if (!isExpectedError(error)) {
//         process.exit(1);
//     }
// });

// process.on("unhandledRejection", (reason) => {
//     throw reason;
// });