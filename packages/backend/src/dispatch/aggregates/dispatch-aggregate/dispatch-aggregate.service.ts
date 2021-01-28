import { Injectable, NotAcceptableException } from '@nestjs/common';
import { from, throwError } from 'rxjs';
import { Dispatch } from '../../../entities/dispatch-entity';
import {
  CreateDispatchOperationDto,
  UpdateDispatchOperationDto,
} from '../../entities/dispatch/dispatch-dto';
import { DispatchService } from '../../entities/dispatch/dispatch.service';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class DispatchAggregateService {
  constructor(private readonly dispatchService: DispatchService) {}

  listDispatchOperation(offset, limit, sort: any, filters: any) {
    let sortQuery = {};
    let filterQuery = {};
    try {
      sortQuery = JSON.parse(sort);
    } catch (error) {
      sortQuery = { createdOn: 'DESC' };
    }

    try {
      filterQuery = JSON.parse(filters);
    } catch (error) {
      filterQuery = {};
    }

    return this.dispatchService.list(
      offset || 0,
      limit || 10,
      sortQuery,
      filterQuery,
    );
  }

  createDispatchOperation(payload: CreateDispatchOperationDto) {
    if (new Date(payload.endDate) > new Date(payload.startDate))
      throw new NotAcceptableException('');
    const dispatchOperation = new Dispatch();
    Object.assign(dispatchOperation, payload);
    dispatchOperation.createdBy = dispatchOperation.modifiedBy = 'Mahesh';
    return from(dispatchOperation.save());
  }

  updateDispatchOperation(payload: UpdateDispatchOperationDto) {
    if (new Date(payload.endDate) > new Date(payload.startDate))
      throw new NotAcceptableException('');
    return from(
      this.dispatchService.findOne({
        uuid: payload.uuid,
      }),
    ).pipe(
      switchMap((dispatch) => {
        Object.assign(dispatch, payload);
        dispatch.modifiedBy = 'Mahesh';
        return from(dispatch.save());
      }),
      catchError((err) => {
        return throwError(err);
      }),
    );
  }

  delete(uuid: string) {
    return from(this.dispatchService.delete(uuid));
  }
}
