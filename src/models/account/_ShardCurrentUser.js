import { fn } from 'sequelize';
export default (db, types) => db.define('_ShardCurrentUser', {
    nID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nShardID: {
        type: types.INTEGER,
        allowNull: false
    },
    nUserCount: {
        type: types.INTEGER,
        allowNull: false
    },
    dLogDate: {
        type: "SMALLDATETIME",
        allowNull: false,
        defaultValue: fn('getdate')
    }
}, {
    sequelize: db,
    tableName: '_ShardCurrentUser',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__ShardCurrentUser",
            fields: [
                { name: "nShardID" },
            ]
        },
        {
            name: "PK___ShardCurrentUse__20C1E124",
            unique: true,
            fields: [
                { name: "nID" },
            ]
        },
    ]
});
