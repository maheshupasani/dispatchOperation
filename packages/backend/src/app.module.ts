import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DispatchModule } from './dispatch/dispatch.module';
import { config } from './config/config.service';

@Module({
  imports: [TypeOrmModule.forRoot(config.getTypeOrmConfig()), DispatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
