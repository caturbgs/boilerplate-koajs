import dotenv from "dotenv";

dotenv.config();

export default {
    port: process.env.PORT || 3000,
    showErrorStack: process.env.SHOW_ERROR_STACK ?? true,
}