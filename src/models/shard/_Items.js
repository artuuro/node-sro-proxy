export default (db, types) => db.define('_Items', {
    ID64: {
        autoIncrement: true,
        type: types.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    RefItemID: {
        type: types.INTEGER,
        allowNull: false
    },
    OptLevel: {
        type: types.TINYINT,
        allowNull: true
    },
    Variance: {
        type: types.BIGINT,
        allowNull: true
    },
    Data: {
        type: types.INTEGER,
        allowNull: false
    },
    CreaterName: {
        type: types.STRING(64),
        allowNull: true
    },
    MagParamNum: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    MagParam1: {
        type: types.BIGINT,
        allowNull: true
    },
    MagParam2: {
        type: types.BIGINT,
        allowNull: true
    },
    MagParam3: {
        type: types.BIGINT,
        allowNull: true
    },
    MagParam4: {
        type: types.BIGINT,
        allowNull: true
    },
    MagParam5: {
        type: types.BIGINT,
        allowNull: true
    },
    MagParam6: {
        type: types.BIGINT,
        allowNull: true
    },
    MagParam7: {
        type: types.BIGINT,
        allowNull: true
    },
    MagParam8: {
        type: types.BIGINT,
        allowNull: true
    },
    MagParam9: {
        type: types.BIGINT,
        allowNull: true
    },
    MagParam10: {
        type: types.BIGINT,
        allowNull: true
    },
    MagParam11: {
        type: types.BIGINT,
        allowNull: true
    },
    MagParam12: {
        type: types.BIGINT,
        allowNull: true
    },
    Serial64: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_Items',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__Items",
            unique: true,
            fields: [
                { name: "ID64" },
            ]
        },
    ]
});
