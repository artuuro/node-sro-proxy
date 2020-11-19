export default (db, types) => db.define('_Punishment', {
    SerialNo: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    UserJID: {
        type: types.INTEGER,
        allowNull: false
    },
    Type: {
        type: types.TINYINT,
        allowNull: false
    },
    Executor: {
        type: types.STRING(128),
        allowNull: false
    },
    Shard: {
        type: types.SMALLINT,
        allowNull: false
    },
    CharName: {
        type: types.STRING(64),
        allowNull: true
    },
    CharInfo: {
        type: types.STRING(256),
        allowNull: false
    },
    PosInfo: {
        type: types.STRING(64),
        allowNull: false
    },
    Guide: {
        type: types.STRING(512),
        allowNull: false
    },
    Description: {
        type: types.STRING(1024),
        allowNull: false
    },
    RaiseTime: {
        type: types.DATE,
        allowNull: false
    },
    BlockStartTime: {
        type: types.DATE,
        allowNull: false
    },
    BlockEndTime: {
        type: types.DATE,
        allowNull: false
    },
    PunishTime: {
        type: types.DATE,
        allowNull: false
    },
    Status: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_Punishment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__Punishment",
            fields: [
                { name: "UserJID" },
            ]
        },
        {
            name: "PK__Punishment",
            unique: true,
            fields: [
                { name: "SerialNo" },
            ]
        },
    ]
});
