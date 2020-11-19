export default (db, types) => db.define('_Shard', {
    nID: {
        autoIncrement: true,
        type: types.SMALLINT,
        allowNull: false,
        primaryKey: true
    },
    nFarmID: {
        type: types.TINYINT,
        allowNull: false
    },
    nContentID: {
        type: types.TINYINT,
        allowNull: false
    },
    szName: {
        type: types.STRING(32),
        allowNull: false
    },
    szDesc: {
        type: types.STRING(256),
        allowNull: false
    },
    szDBConfig: {
        type: types.STRING(256),
        allowNull: false
    },
    nMaxUser: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 1000
    },
    nStartupServerID: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 0
    },
    nStatus: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    nCurrentUserRatio: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_Shard',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK___Shard__7C4F7684",
            unique: true,
            fields: [
                { name: "nID" },
            ]
        },
    ]
});
