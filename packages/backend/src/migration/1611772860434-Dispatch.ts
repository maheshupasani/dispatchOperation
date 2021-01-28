import {MigrationInterface, QueryRunner} from "typeorm";

export class Dispatch1611772860434 implements MigrationInterface {
    name = 'Dispatch1611772860434'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `dispatch` (`uuid` varchar(36) NOT NULL, `createdOn` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `modifiedOn` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `createdBy` varchar(255) NOT NULL, `modifiedBy` varchar(255) NOT NULL, `deliveryNumber` varchar(255) NOT NULL, `shipmentNumber` varchar(255) NOT NULL, `sourceCode` varchar(255) NOT NULL, `destinationCode` varchar(255) NOT NULL, `vehicleNumber` varchar(255) NOT NULL, `transporterCode` varchar(255) NOT NULL, `startDate` datetime NOT NULL, `endDate` varchar(255) NOT NULL, `driverName` varchar(255) NOT NULL, `driverPhone` varchar(255) NOT NULL, PRIMARY KEY (`uuid`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `dispatch`");
    }

}
