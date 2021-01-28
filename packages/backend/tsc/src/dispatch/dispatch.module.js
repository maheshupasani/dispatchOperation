"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatchModule = void 0;
var common_1 = require("@nestjs/common");
var dispatch_controller_1 = require("./controllers/dispatch/dispatch.controller");
var dispatch_aggregate_service_1 = require("./aggregates/dispatch-aggregate/dispatch-aggregate.service");
var entities_module_1 = require("./entities/entities.module");
var DispatchModule = /** @class */ (function () {
    function DispatchModule() {
    }
    DispatchModule = __decorate([
        common_1.Module({
            controllers: [dispatch_controller_1.DispatchController],
            providers: [dispatch_aggregate_service_1.DispatchAggregateService],
            imports: [entities_module_1.DispatchEntitiesModule],
        })
    ], DispatchModule);
    return DispatchModule;
}());
exports.DispatchModule = DispatchModule;
//# sourceMappingURL=dispatch.module.js.map