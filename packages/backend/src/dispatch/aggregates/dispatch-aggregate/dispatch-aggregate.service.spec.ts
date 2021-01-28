import { Test, TestingModule } from '@nestjs/testing';
import { DispatchAggregateService } from './dispatch-aggregate.service';

describe('DispatchAggregateService', () => {
  let service: DispatchAggregateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DispatchAggregateService],
    }).compile();

    service = module.get<DispatchAggregateService>(DispatchAggregateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
