import pino, {Logger, Bindings} from "pino";

export const log = pino();

export function createLogger(type: string, config?: Bindings): Logger {
    return log.child({
        type,
        ...config,
    });
}