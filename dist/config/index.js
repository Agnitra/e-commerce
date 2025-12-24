"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var config = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    },
};
exports.default = config;
//# sourceMappingURL=index.js.map