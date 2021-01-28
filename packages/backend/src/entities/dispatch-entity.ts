import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Dispatch extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  modifiedOn: Date;

  @Column()
  createdBy: string;

  @Column()
  modifiedBy: string;

  @Column({ unique: true, nullable: false })
  deliveryNumber: string;

  @Column({ nullable: true })
  shipmentNumber: string;

  @Column({ nullable: false })
  sourceCode: string;

  @Column({ nullable: false })
  destinationCode: string;

  @Column({ nullable: false })
  vehicleNumber: string;

  @Column({ nullable: false })
  transporterCode: string;

  @Column({ nullable: false })
  startDate: Date;

  @Column({ nullable: false })
  endDate: string;

  @Column({ nullable: true, length: '50' })
  driverName: string;

  @Column({ nullable: true })
  driverPhone: string;
}
