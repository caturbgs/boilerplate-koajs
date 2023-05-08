import { errorHandler, isExpectedError } from '@helpers/error_handler';
import cors from '@koa/cors';
import Router from '@koa/router';
import initializeErrorHandler from '@middlewares/error_handler';
import initializeHttpLogger from '@middlewares/http_logger';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import config from './config';
import { initializeRoutes } from './routes';

const app = new Koa();
const router = new Router();

// Example of using custom middleware global
// router.use(customMiddlewareGlobal());

router.get('/', async (ctx) => {
    ctx.body = 'Server is running';
});

// Middlewares
app.use(cors());
app.use(bodyParser({
    jsonLimit: '2mb',
}));
initializeRoutes(router);
app.use(initializeHttpLogger);
app.use(initializeErrorHandler);
app.use(router.routes());
app.use(router.allowedMethods());

// Error handling
app.on("error", (error) => {
    errorHandler(error);
});
process.on("uncaughtException", (error) => {
    errorHandler(error);

    if (!isExpectedError(error)) {
        process.exit(1);
    }
});
process.on("unhandledRejection", (reason) => {
    throw reason;
});

// Start server
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
