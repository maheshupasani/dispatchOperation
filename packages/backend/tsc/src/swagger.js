"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
var fs_1 = require("fs");
var path_1 = require("path");
var swagger_1 = require("@nestjs/swagger");
var app_strings_1 = require("./constant/app-strings");
function setupSwagger(app) {
    var version = JSON.parse(fs_1.readFileSync(path_1.join(process.cwd(), 'package.json'), 'utf-8')).version;
    var options = new swagger_1.DocumentBuilder()
        .setTitle(app_strings_1.APP_NAME)
        .setVersion(version)
        .build();
    var document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup(app_strings_1.SWAGGER_ROUTE, app, document);
}
exports.setupSwagger = setupSwagger;
//# sourceMappingURL=swagger.js.map