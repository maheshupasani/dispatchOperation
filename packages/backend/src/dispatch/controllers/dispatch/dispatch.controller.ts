import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DispatchAggregateService } from '../../aggregates/dispatch-aggregate/dispatch-aggregate.service';
import {
  CreateDispatchOperationDto,
  DispatchOperationListQueryDto,
  UpdateDispatchOperationDto,
} from '../../entities/dispatch/dispatch-dto';

@Controller('dispatch')
export class DispatchController {
  constructor(
    private readonly dispatchAggregateService: DispatchAggregateService,
  ) {}

  @Get('')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async listApplication(@Query() query: DispatchOperationListQueryDto) {
    const { offset, limit, sort, filters } = query;
    return await this.dispatchAggregateService.listDispatchOperation(
      Number(offset),
      Number(limit),
      sort,
      filters,
    );
  }

  @Post('')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async createDispatchOperation(@Body() payload: CreateDispatchOperationDto) {
    return await this.dispatchAggregateService
      .createDispatchOperation(payload)
      .toPromise();
  }

  @Put('')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async updateDispatchOperation(@Body() payload: UpdateDispatchOperationDto) {
    return await this.dispatchAggregateService
      .updateDispatchOperation(payload)
      .toPromise();
  }

  @Delete(':uuid')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async deleteDispatchOperation(@Param() uuid: string) {
    return await this.dispatchAggregateService.delete(uuid).toPromise();
  }
}
