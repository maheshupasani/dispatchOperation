"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Dispatch = void 0;
var typeorm_1 = require("typeorm");
var Dispatch = /** @class */ (function (_super) {
    __extends(Dispatch, _super);
    function Dispatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], Dispatch.prototype, "uuid", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Dispatch.prototype, "createdOn", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], Dispatch.prototype, "modifiedOn", void 0);
    __decorate([
        typeorm_1.DeleteDateColumn(),
        __metadata("design:type", Date)
    ], Dispatch.prototype, "deletedOn", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Dispatch.prototype, "createdBy", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Dispatch.prototype, "modifiedBy", void 0);
    __decorate([
        typeorm_1.Column({ unique: true, nullable: false }),
        __metadata("design:type", String)
    ], Dispatch.prototype, "deliveryNumber", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Dispatch.prototype, "shipmentNumber", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Dispatch.prototype, "sourceCode", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Dispatch.prototype, "destinationCode", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Dispatch.prototype, "vehicleNumber", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Dispatch.prototype, "transporterCode", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", Date)
    ], Dispatch.prototype, "startDate", void 0);
    __decorate([
        typeorm_1.Column({ nullable: false }),
        __metadata("design:type", String)
    ], Dispatch.prototype, "endDate", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true, length: '50' }),
        __metadata("design:type", String)
    ], Dispatch.prototype, "driverName", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Dispatch.prototype, "driverPhone", void 0);
    Dispatch = __decorate([
        typeorm_1.Entity()
    ], Dispatch);
    return Dispatch;
}(typeorm_1.BaseEntity));
exports.Dispatch = Dispatch;
//# sourceMappingURL=dispatch-entity.js.map