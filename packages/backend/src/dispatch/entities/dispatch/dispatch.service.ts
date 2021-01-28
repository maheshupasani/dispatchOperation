import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Dispatch } from '../../../entities/dispatch-entity';

@Injectable()
export class DispatchService {
  constructor(
    @InjectRepository(Dispatch)
    private readonly dispatchRepository: Repository<Dispatch>,
  ) {}

  async list(skip = 0, take = 10, sort = {}, filters = {}) {
    for (const key of Object.keys(sort)) {
      sort[key] = sort[key].toUpperCase();
      if (!sort[key]) {
        delete sort[key];
      }
    }
    const where = filters ? this.getFilterQuery(filters) : {};
    const [results, length] = await this.dispatchRepository.findAndCount({
      skip,
      take,
      where,
      order: sort,
    });

    return {
      docs: results || [],
      length,
      offset: skip,
    };
  }

  getFilterQuery(query) {
    const keys = Object.keys(query);
    keys.forEach((key) => {
      if (query[key]) {
        if (key === 'status' && query[key] === 'All') delete query[key];
        if (key === 'status') query[key];
        else query[key] = Like(`%${query[key]}%`);
      } else delete query[key];
    });
    return query;
  }

  async findOne(query) {
    return await this.dispatchRepository.findOne(query);
  }

  async delete(uuid: string) {
    return await this.dispatchRepository.delete(uuid);
  }
}
