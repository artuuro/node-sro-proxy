export default (db, types) => db.define('_RefOptionalTeleport', {
    Service: {
        type: types.INTEGER,
        allowNull: false
    },
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ObjName128: {
        type: types.STRING(129),
        allowNull: false
    },
    ZoneName128: {
        type: types.STRING(129),
        allowNull: false
    },
    RegionID: {
        type: types.SMALLINT,
        allowNull: false
    },
    Pos_X: {
        type: types.SMALLINT,
        allowNull: false
    },
    Pos_Y: {
        type: types.SMALLINT,
        allowNull: false
    },
    Pos_Z: {
        type: types.SMALLINT,
        allowNull: false
    },
    WorldID: {
        type: types.SMALLINT,
        allowNull: false
    },
    RegionIDGroup: {
        type: types.INTEGER,
        allowNull: false
    },
    MapPoint: {
        type: types.TINYINT,
        allowNull: false
    },
    LevelMin: {
        type: types.SMALLINT,
        allowNull: false
    },
    LevelMax: {
        type: types.SMALLINT,
        allowNull: false
    },
    Param1: {
        type: types.INTEGER,
        allowNull: true
    },
    Param1_Desc_128: {
        type: types.STRING(129),
        allowNull: true
    },
    Param2: {
        type: types.INTEGER,
        allowNull: true
    },
    Param2_Desc_128: {
        type: types.STRING(129),
        allowNull: true
    },
    Param3: {
        type: types.INTEGER,
        allowNull: true
    },
    Param3_Desc_128: {
        type: types.STRING(129),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_RefOptionalTeleport',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX_RefOptionalTeleport",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
