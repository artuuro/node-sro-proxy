export default (db, types) => db.define('_RefHWANLevel', {
    HwanLevel: {
        type: types.TINYINT,
        allowNull: false,
        primaryKey: true
    },
    ParamFourcc1: {
        type: types.INTEGER,
        allowNull: true
    },
    ParamValue1: {
        type: types.TINYINT,
        allowNull: true
    },
    ParamFourcc2: {
        type: types.INTEGER,
        allowNull: true
    },
    ParamValue2: {
        type: types.TINYINT,
        allowNull: true
    },
    ParamFourcc3: {
        type: types.INTEGER,
        allowNull: true
    },
    ParamValue3: {
        type: types.TINYINT,
        allowNull: true
    },
    ParamFourcc4: {
        type: types.INTEGER,
        allowNull: true
    },
    ParamValue4: {
        type: types.TINYINT,
        allowNull: true
    },
    ParamFourcc5: {
        type: types.INTEGER,
        allowNull: true
    },
    ParamValue5: {
        type: types.TINYINT,
        allowNull: true
    },
    AssocFileObj128: {
        type: types.STRING(129),
        allowNull: true
    },
    Title_CH70: {
        type: types.STRING(70),
        allowNull: true
    },
    Title_EU70: {
        type: types.STRING(70),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_RefHWANLevel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefHWANLevel",
            unique: true,
            fields: [
                { name: "HwanLevel" },
            ]
        },
    ]
});
