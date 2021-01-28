"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatchAggregateService = void 0;
var common_1 = require("@nestjs/common");
var rxjs_1 = require("rxjs");
var dispatch_entity_1 = require("../../../entities/dispatch-entity");
var dispatch_service_1 = require("../../entities/dispatch/dispatch.service");
var operators_1 = require("rxjs/operators");
var DispatchAggregateService = /** @class */ (function () {
    function DispatchAggregateService(dispatchService) {
        this.dispatchService = dispatchService;
    }
    DispatchAggregateService.prototype.listDispatchOperation = function (offset, limit, sort, filters) {
        var sortQuery = {};
        var filterQuery = {};
        try {
            sortQuery = JSON.parse(sort);
        }
        catch (error) {
            sortQuery = { createdOn: 'DESC' };
        }
        try {
            filterQuery = JSON.parse(filters);
        }
        catch (error) {
            filterQuery = {};
        }
        return this.dispatchService.list(offset || 0, limit || 10, sortQuery, filterQuery);
    };
    DispatchAggregateService.prototype.createDispatchOperation = function (payload) {
        if (new Date(payload.endDate) > new Date(payload.startDate))
            throw new common_1.NotAcceptableException('');
        var dispatchOperation = new dispatch_entity_1.Dispatch();
        Object.assign(dispatchOperation, payload);
        dispatchOperation.createdBy = dispatchOperation.modifiedBy = 'Mahesh';
        return rxjs_1.from(dispatchOperation.save());
    };
    DispatchAggregateService.prototype.updateDispatchOperation = function (payload) {
        if (new Date(payload.endDate) > new Date(payload.startDate))
            throw new common_1.NotAcceptableException('');
        return rxjs_1.from(this.dispatchService.findOne({
            uuid: payload.uuid,
        })).pipe(operators_1.switchMap(function (dispatch) {
            Object.assign(dispatch, payload);
            dispatch.modifiedBy = 'Mahesh';
            return rxjs_1.from(dispatch.save());
        }), operators_1.catchError(function (err) {
            return rxjs_1.throwError(err);
        }));
    };
    DispatchAggregateService.prototype.delete = function (uuid) {
        return rxjs_1.from(this.dispatchService.delete(uuid));
    };
    DispatchAggregateService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [dispatch_service_1.DispatchService])
    ], DispatchAggregateService);
    return DispatchAggregateService;
}());
exports.DispatchAggregateService = DispatchAggregateService;
//# sourceMappingURL=dispatch-aggregate.service.js.map