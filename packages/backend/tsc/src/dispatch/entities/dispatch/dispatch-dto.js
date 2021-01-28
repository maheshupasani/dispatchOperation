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
exports.UpdateDispatchOperationDto = exports.CreateDispatchOperationDto = exports.DispatchOperationListQueryDto = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var DispatchOperationListQueryDto = /** @class */ (function () {
    function DispatchOperationListQueryDto() {
    }
    __decorate([
        swagger_1.ApiProperty({
            description: "number of records should start fetching data",
            required: false,
            example: '0',
        }),
        class_validator_1.IsOptional(),
        __metadata("design:type", Number)
    ], DispatchOperationListQueryDto.prototype, "offset", void 0);
    __decorate([
        swagger_1.ApiProperty({
            description: "number of records to be fetched",
            required: false,
            example: '10',
        }),
        class_validator_1.IsOptional(),
        __metadata("design:type", Number)
    ], DispatchOperationListQueryDto.prototype, "limit", void 0);
    __decorate([
        swagger_1.ApiProperty({
            description: 'Pass stringified object in key value pair. Eg: sort:{"name":"DESC"} ',
            required: false,
            example: '{"name":"DESC"}',
        }),
        class_validator_1.IsOptional(),
        __metadata("design:type", String)
    ], DispatchOperationListQueryDto.prototype, "sort", void 0);
    __decorate([
        swagger_1.ApiProperty({
            description: "Pass the user input as stringified object in key value pair. \n    Eg: for user input of 'ha' add the following in http request filters:{\"name\":\"ha\"} ",
            required: false,
            example: '{"name":"ha"}',
        }),
        class_validator_1.IsOptional(),
        __metadata("design:type", String)
    ], DispatchOperationListQueryDto.prototype, "filters", void 0);
    return DispatchOperationListQueryDto;
}());
exports.DispatchOperationListQueryDto = DispatchOperationListQueryDto;
var CreateDispatchOperationDto = /** @class */ (function () {
    function CreateDispatchOperationDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], CreateDispatchOperationDto.prototype, "deliverNumber", void 0);
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], CreateDispatchOperationDto.prototype, "shipmentNumber", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], CreateDispatchOperationDto.prototype, "sourceCode", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], CreateDispatchOperationDto.prototype, "destinationCode", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        class_validator_1.Matches('^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$'),
        __metadata("design:type", String)
    ], CreateDispatchOperationDto.prototype, "vehicleNumber", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], CreateDispatchOperationDto.prototype, "transporterCode", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsDate(),
        swagger_1.ApiProperty(),
        __metadata("design:type", Date)
    ], CreateDispatchOperationDto.prototype, "startDate", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsDate(),
        swagger_1.ApiProperty(),
        __metadata("design:type", Date)
    ], CreateDispatchOperationDto.prototype, "endDate", void 0);
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        class_validator_1.MaxLength(50),
        __metadata("design:type", String)
    ], CreateDispatchOperationDto.prototype, "driverName", void 0);
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        class_validator_1.Matches('^[0-9]{10}$'),
        __metadata("design:type", String)
    ], CreateDispatchOperationDto.prototype, "driverPhone", void 0);
    return CreateDispatchOperationDto;
}());
exports.CreateDispatchOperationDto = CreateDispatchOperationDto;
var UpdateDispatchOperationDto = /** @class */ (function () {
    function UpdateDispatchOperationDto() {
    }
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], UpdateDispatchOperationDto.prototype, "uuid", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], UpdateDispatchOperationDto.prototype, "deliverNumber", void 0);
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], UpdateDispatchOperationDto.prototype, "shipmentNumber", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], UpdateDispatchOperationDto.prototype, "sourceCode", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], UpdateDispatchOperationDto.prototype, "destinationCode", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], UpdateDispatchOperationDto.prototype, "vehicleNumber", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], UpdateDispatchOperationDto.prototype, "transporterCode", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsDate(),
        swagger_1.ApiProperty(),
        __metadata("design:type", Date)
    ], UpdateDispatchOperationDto.prototype, "startDate", void 0);
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.IsDate(),
        swagger_1.ApiProperty(),
        __metadata("design:type", Date)
    ], UpdateDispatchOperationDto.prototype, "endDate", void 0);
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        class_validator_1.MaxLength(50),
        __metadata("design:type", String)
    ], UpdateDispatchOperationDto.prototype, "driverName", void 0);
    __decorate([
        class_validator_1.IsOptional(),
        class_validator_1.IsString(),
        swagger_1.ApiProperty(),
        class_validator_1.Matches('^[0-9]{10}$'),
        __metadata("design:type", String)
    ], UpdateDispatchOperationDto.prototype, "driverPhone", void 0);
    return UpdateDispatchOperationDto;
}());
exports.UpdateDispatchOperationDto = UpdateDispatchOperationDto;
//# sourceMappingURL=dispatch-dto.js.map