"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatchEntitiesModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var dispatch_entity_1 = require("../../entities/dispatch-entity");
var dispatch_service_1 = require("./dispatch/dispatch.service");
var DispatchEntitiesModule = /** @class */ (function () {
    function DispatchEntitiesModule() {
    }
    DispatchEntitiesModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([dispatch_entity_1.Dispatch])],
            providers: [dispatch_service_1.DispatchService],
            exports: [dispatch_service_1.DispatchService],
        })
    ], DispatchEntitiesModule);
    return DispatchEntitiesModule;
}());
exports.DispatchEntitiesModule = DispatchEntitiesModule;
//# sourceMappingURL=entities.module.js.map