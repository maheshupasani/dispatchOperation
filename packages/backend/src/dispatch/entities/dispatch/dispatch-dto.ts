import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';

export class DispatchOperationListQueryDto {
  @ApiProperty({
    description: `number of records should start fetching data`,
    required: false,
    example: '0',
  })
  @IsOptional()
  offset: number;

  @ApiProperty({
    description: `number of records to be fetched`,
    required: false,
    example: '10',
  })
  @IsOptional()
  limit: number;

  @ApiProperty({
    description:
      'Pass stringified object in key value pair. Eg: sort:{"name":"DESC"} ',
    required: false,
    example: '{"name":"DESC"}',
  })
  @IsOptional()
  sort: string;

  @ApiProperty({
    description: `Pass the user input as stringified object in key value pair. 
    Eg: for user input of 'ha' add the following in http request filters:{"name":"ha"} `,
    required: false,
    example: '{"name":"ha"}',
  })
  @IsOptional()
  filters: string;
}

export class CreateDispatchOperationDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  deliverNumber: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  shipmentNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  sourceCode: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  destinationCode: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Matches('^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$')
  vehicleNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  transporterCode: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  startDate: Date;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  endDate: Date;

  @IsOptional()
  @IsString()
  @ApiProperty()
  @MaxLength(50)
  driverName: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  @Matches('^[0-9]{10}$')
  driverPhone: string;
}

export class UpdateDispatchOperationDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  uuid: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  deliverNumber: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  shipmentNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  sourceCode: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  destinationCode: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  vehicleNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  transporterCode: string;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  startDate: Date;

  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  endDate: Date;

  @IsOptional()
  @IsString()
  @ApiProperty()
  @MaxLength(50)
  driverName: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  @Matches('^[0-9]{10}$')
  driverPhone: string;
}
