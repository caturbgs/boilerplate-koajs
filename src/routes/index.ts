import * as Router from '@koa/router';
import * as fs from "fs";

export async function initializeRoutes(router: Router) {
    const routes = (await fs.promises.readdir((__dirname)))
        .filter(it => it.endsWith(".ts"))
        .filter(it => it !== "index.ts")
        .map(it => it.replace(".ts", ""));

    for (const route of routes) {
        const moduleRouter = await import(`${__dirname}/${route}`);

        router.use(`/${route}`, moduleRouter.default.routes(), moduleRouter.default.allowedMethods());
    }
}