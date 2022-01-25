import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFollowers1643142132099 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'followers',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'following_id',
                    type: 'uuid'
                },
                {
                    name: 'follower_id',
                    type: 'uuid'
                }
            ],
            foreignKeys: [
                {
                    name: 'Following',
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    columnNames: ['following_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
                {
                    name: 'Follower',
                    referencedTableName: 'users',
                    referencedColumnNames: ['id'],
                    columnNames: ['follower_id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
