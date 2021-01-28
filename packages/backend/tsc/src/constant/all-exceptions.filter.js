"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
var common_1 = require("@nestjs/common");
var AllExceptionsFilter = /** @class */ (function () {
    function AllExceptionsFilter() {
    }
    AllExceptionsFilter.prototype.catch = function (exception, host) {
        var ctx = host.switchToHttp();
        var response = ctx.getResponse();
        var request = ctx.getRequest();
        var status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        var message = exception instanceof Error ? exception.message : exception.message.error;
        if (exception.status === common_1.HttpStatus.NOT_FOUND) {
            status = common_1.HttpStatus.NOT_FOUND;
        }
        if (exception.status === common_1.HttpStatus.SERVICE_UNAVAILABLE) {
            status = common_1.HttpStatus.SERVICE_UNAVAILABLE;
        }
        if (exception.status === common_1.HttpStatus.NOT_ACCEPTABLE) {
            status = common_1.HttpStatus.NOT_ACCEPTABLE;
        }
        if (exception.status === common_1.HttpStatus.EXPECTATION_FAILED) {
            status = common_1.HttpStatus.EXPECTATION_FAILED;
        }
        if (exception.status === common_1.HttpStatus.BAD_REQUEST) {
            status = common_1.HttpStatus.BAD_REQUEST;
        }
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            success: false,
            data: [],
            error: message,
            message: status === common_1.HttpStatus.INTERNAL_SERVER_ERROR
                ? 'Sorry we are experiencing technical problems.'
                : '',
        });
    };
    AllExceptionsFilter = __decorate([
        common_1.Catch()
    ], AllExceptionsFilter);
    return AllExceptionsFilter;
}());
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=all-exceptions.filter.js.map