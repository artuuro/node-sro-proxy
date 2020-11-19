import { fn } from 'sequelize';
export default (db, types) => db.define('_CasData', {
    nSerial: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nCategory: {
        type: types.TINYINT,
        allowNull: false
    },
    dReportDate: {
        type: types.DATE,
        allowNull: false,
        defaultValue: fn('getdate')
    },
    wShardID: {
        type: types.SMALLINT,
        allowNull: false
    },
    dwUserJID: {
        type: types.INTEGER,
        allowNull: false
    },
    szCharName: {
        type: types.STRING(64),
        allowNull: false
    },
    szTgtCharName: {
        type: types.STRING(64),
        allowNull: true
    },
    szMailAddress: {
        type: types.STRING(40),
        allowNull: false
    },
    szStatement: {
        type: types.STRING(512),
        allowNull: false
    },
    nStatus: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    dProcessDate: {
        type: types.DATE,
        allowNull: true
    },
    szProcessedGM: {
        type: types.STRING(20),
        allowNull: true
    },
    szMemo: {
        type: types.STRING(128),
        allowNull: true
    },
    szAnswer: {
        type: types.STRING(1024),
        allowNull: true
    },
    btUserChecked: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    szChatLog: {
        type: types.STRING(4000),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_CasData',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK___CasData__0EA330E9",
            unique: true,
            fields: [
                { name: "nSerial" },
            ]
        },
    ]
});
