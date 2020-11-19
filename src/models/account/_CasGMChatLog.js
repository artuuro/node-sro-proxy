import { fn } from 'sequelize';
export default (db, types) => db.define('_CasGMChatLog', {
    nSerial: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    szGM: {
        type: types.STRING(20),
        allowNull: false
    },
    wShardID: {
        type: types.SMALLINT,
        allowNull: false
    },
    szCharName: {
        type: types.STRING(64),
        allowNull: false
    },
    nCasSerial: {
        type: types.INTEGER,
        allowNull: false
    },
    szGMChatLog: {
        type: types.STRING(4000),
        allowNull: true
    },
    dWritten: {
        type: types.DATE,
        allowNull: false,
        defaultValue: fn('getdate')
    }
}, {
    sequelize: db,
    tableName: '_CasGMChatLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK___CasGMChatLog__0F975522",
            unique: true,
            fields: [
                { name: "nSerial" },
            ]
        },
    ]
});
