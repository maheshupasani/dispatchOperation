"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require('dotenv').config();
var ConfigService = /** @class */ (function () {
    function ConfigService(env) {
        this.env = env;
    }
    ConfigService.prototype.getValue = function (key, throwOnMissing) {
        if (throwOnMissing === void 0) { throwOnMissing = true; }
        var value = this.env[key];
        if (!value && throwOnMissing && key !== 'MYSQL_PASSWORD') {
            throw new Error("config error - missing env." + key);
        }
        return value;
    };
    ConfigService.prototype.ensureValues = function (keys) {
        var _this = this;
        keys.forEach(function (k) { return _this.getValue(k, true); });
        return this;
    };
    ConfigService.prototype.getPort = function () {
        return this.getValue('PORT', true);
    };
    ConfigService.prototype.getTypeOrmConfig = function () {
        return {
            type: 'mysql',
            host: this.getValue('MYSQL_HOST'),
            port: parseInt(this.getValue('MYSQL_PORT')),
            username: this.getValue('MYSQL_USER'),
            password: this.getValue('MYSQL_PASSWORD'),
            database: this.getValue('MYSQL_DATABASE'),
            entities: ['dist/**/*-entity{.ts,.js}'],
            migrationsTableName: 'migration',
            migrations: ['src/migration/*{.ts,.js}'],
            cli: {
                migrationsDir: 'src/migration',
            },
        };
    };
    return ConfigService;
}());
var config = new ConfigService(process.env).ensureValues([
    'MYSQL_HOST',
    'MYSQL_PORT',
    'MYSQL_USER',
    'MYSQL_PASSWORD',
    'MYSQL_DATABASE',
]);
exports.config = config;
//# sourceMappingURL=config.service.js.map