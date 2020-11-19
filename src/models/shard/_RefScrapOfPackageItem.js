export default (db, types) => db.define('_RefScrapOfPackageItem', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    Country: {
        type: types.INTEGER,
        allowNull: false
    },
    RefPackageItemCodeName: {
        type: types.STRING(129),
        allowNull: false
    },
    RefItemCodeName: {
        type: types.STRING(129),
        allowNull: false
    },
    OptLevel: {
        type: types.TINYINT,
        allowNull: false
    },
    Variance: {
        type: types.BIGINT,
        allowNull: false
    },
    Data: {
        type: types.INTEGER,
        allowNull: false
    },
    MagParamNum: {
        type: types.TINYINT,
        allowNull: false
    },
    MagParam1: {
        type: types.BIGINT,
        allowNull: false
    },
    MagParam2: {
        type: types.BIGINT,
        allowNull: false
    },
    MagParam3: {
        type: types.BIGINT,
        allowNull: false
    },
    MagParam4: {
        type: types.BIGINT,
        allowNull: false
    },
    MagParam5: {
        type: types.BIGINT,
        allowNull: false
    },
    MagParam6: {
        type: types.BIGINT,
        allowNull: false
    },
    MagParam7: {
        type: types.BIGINT,
        allowNull: false
    },
    MagParam8: {
        type: types.BIGINT,
        allowNull: false
    },
    MagParam9: {
        type: types.BIGINT,
        allowNull: false
    },
    MagParam10: {
        type: types.BIGINT,
        allowNull: false
    },
    MagParam11: {
        type: types.BIGINT,
        allowNull: false
    },
    MagParam12: {
        type: types.BIGINT,
        allowNull: false
    },
    Param1: {
        type: types.INTEGER,
        allowNull: false
    },
    Param1_Desc128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param2: {
        type: types.INTEGER,
        allowNull: false
    },
    Param2_Desc128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param3: {
        type: types.INTEGER,
        allowNull: false
    },
    Param3_Desc128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param4: {
        type: types.INTEGER,
        allowNull: false
    },
    Param4_Desc128: {
        type: types.STRING(129),
        allowNull: false
    },
    Index: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize: db,
    tableName: '_RefScrapOfPackageItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefScrapOfPackageItem",
            unique: true,
            fields: [
                { name: "Index" },
            ]
        },
    ]
});
