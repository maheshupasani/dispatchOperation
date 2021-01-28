import {MigrationInterface, QueryRunner} from "typeorm";

export class DispatchOperation1611846429006 implements MigrationInterface {
    name = 'DispatchOperation1611846429006'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `dispatch` (`uuid` varchar(36) NOT NULL, `createdOn` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `modifiedOn` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deletedOn` datetime(6) NULL, `createdBy` varchar(255) NOT NULL, `modifiedBy` varchar(255) NOT NULL, `deliveryNumber` varchar(255) NOT NULL, `shipmentNumber` varchar(255) NULL, `sourceCode` varchar(255) NOT NULL, `destinationCode` varchar(255) NOT NULL, `vehicleNumber` varchar(255) NOT NULL, `transporterCode` varchar(255) NOT NULL, `startDate` datetime NOT NULL, `endDate` varchar(255) NOT NULL, `driverName` varchar(50) NULL, `driverPhone` varchar(255) NULL, UNIQUE INDEX `IDX_c134c983030a4e6ca683b23e82` (`deliveryNumber`), PRIMARY KEY (`uuid`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_c134c983030a4e6ca683b23e82` ON `dispatch`");
        await queryRunner.query("DROP TABLE `dispatch`");
    }

}
