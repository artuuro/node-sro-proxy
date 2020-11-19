export default (db, types) => db.define('_CharInstanceWorldData', {
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    DungeonKeyID: {
        type: types.INTEGER,
        allowNull: false
    },
    WorldID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    LayerID: {
        type: types.INTEGER,
        allowNull: false
    },
    OpenedTime: {
        type: types.DATE,
        allowNull: false
    },
    RegionID: {
        type: types.SMALLINT,
        allowNull: false
    },
    PosX: {
        type: types.INTEGER,
        allowNull: false
    },
    PosY: {
        type: types.INTEGER,
        allowNull: false
    },
    PosZ: {
        type: types.INTEGER,
        allowNull: false
    },
    IsActivated: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    EnterCount: {
        type: types.INTEGER,
        allowNull: false
    },
    LastEnterTime: {
        type: types.DATE,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_CharInstanceWorldData',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__CharInstanceWorldData",
            unique: true,
            fields: [
                { name: "CharID" },
                { name: "WorldID" },
            ]
        },
    ]
});
