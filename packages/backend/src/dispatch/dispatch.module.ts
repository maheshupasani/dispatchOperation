import { Module } from '@nestjs/common';
import { DispatchController } from './controllers/dispatch/dispatch.controller';
import { DispatchAggregateService } from './aggregates/dispatch-aggregate/dispatch-aggregate.service';
import { DispatchEntitiesModule } from './entities/entities.module';

@Module({
  controllers: [DispatchController],
  providers: [DispatchAggregateService],
  imports: [DispatchEntitiesModule],
})
export class DispatchModule {}
