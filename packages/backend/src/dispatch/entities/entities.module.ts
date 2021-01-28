import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dispatch } from '../../entities/dispatch-entity';
import { DispatchService } from './dispatch/dispatch.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dispatch])],
  providers: [DispatchService],
  exports: [DispatchService],
})
export class DispatchEntitiesModule {}
