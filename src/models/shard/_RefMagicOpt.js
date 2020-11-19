export default (db, types) => db.define('_RefMagicOpt', {
    Service: {
        type: types.INTEGER,
        allowNull: false
    },
    ID: {
        autoIncrement: true,
        type: types.SMALLINT,
        allowNull: false,
        primaryKey: true
    },
    MOptName128: {
        type: types.STRING(129),
        allowNull: false
    },
    AttrType: {
        type: types.STRING(8),
        allowNull: false
    },
    MLevel: {
        type: types.INTEGER,
        allowNull: false
    },
    Prob: {
        type: types.REAL,
        allowNull: false
    },
    Weight: {
        type: types.INTEGER,
        allowNull: false
    },
    Param1: {
        type: types.INTEGER,
        allowNull: false
    },
    Param2: {
        type: types.INTEGER,
        allowNull: false
    },
    Param3: {
        type: types.INTEGER,
        allowNull: false
    },
    Param4: {
        type: types.INTEGER,
        allowNull: false
    },
    Param5: {
        type: types.INTEGER,
        allowNull: false
    },
    Param6: {
        type: types.INTEGER,
        allowNull: false
    },
    Param7: {
        type: types.INTEGER,
        allowNull: false
    },
    Param8: {
        type: types.INTEGER,
        allowNull: false
    },
    Param9: {
        type: types.INTEGER,
        allowNull: false
    },
    Param10: {
        type: types.INTEGER,
        allowNull: false
    },
    Param11: {
        type: types.INTEGER,
        allowNull: false
    },
    Param12: {
        type: types.INTEGER,
        allowNull: false
    },
    Param13: {
        type: types.INTEGER,
        allowNull: false
    },
    Param14: {
        type: types.INTEGER,
        allowNull: false
    },
    Param15: {
        type: types.INTEGER,
        allowNull: false
    },
    Param16: {
        type: types.INTEGER,
        allowNull: false
    },
    ExcFunc1: {
        type: types.INTEGER,
        allowNull: false
    },
    ExcFunc2: {
        type: types.INTEGER,
        allowNull: false
    },
    ExcFunc3: {
        type: types.INTEGER,
        allowNull: false
    },
    ExcFunc4: {
        type: types.INTEGER,
        allowNull: false
    },
    ExcFunc5: {
        type: types.INTEGER,
        allowNull: false
    },
    ExcFunc6: {
        type: types.INTEGER,
        allowNull: false
    },
    AvailItemGroup1: {
        type: types.STRING(129),
        allowNull: false
    },
    ReqClass1: {
        type: types.INTEGER,
        allowNull: false
    },
    AvailItemGroup2: {
        type: types.STRING(129),
        allowNull: false
    },
    ReqClass2: {
        type: types.INTEGER,
        allowNull: false
    },
    AvailItemGroup3: {
        type: types.STRING(129),
        allowNull: false
    },
    ReqClass3: {
        type: types.INTEGER,
        allowNull: false
    },
    AvailItemGroup4: {
        type: types.STRING(129),
        allowNull: false
    },
    ReqClass4: {
        type: types.INTEGER,
        allowNull: false
    },
    AvailItemGroup5: {
        type: types.STRING(129),
        allowNull: false
    },
    ReqClass5: {
        type: types.INTEGER,
        allowNull: false
    },
    AvailItemGroup6: {
        type: types.STRING(129),
        allowNull: true
    },
    ReqClass6: {
        type: types.INTEGER,
        allowNull: true
    },
    AvailItemGroup7: {
        type: types.STRING(129),
        allowNull: true
    },
    ReqClass7: {
        type: types.INTEGER,
        allowNull: true
    },
    AvailItemGroup8: {
        type: types.STRING(129),
        allowNull: true
    },
    ReqClass8: {
        type: types.INTEGER,
        allowNull: true
    },
    AvailItemGroup9: {
        type: types.STRING(129),
        allowNull: true
    },
    ReqClass9: {
        type: types.INTEGER,
        allowNull: true
    },
    AvailItemGroup10: {
        type: types.STRING(129),
        allowNull: true
    },
    ReqClass10: {
        type: types.INTEGER,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_RefMagicOpt',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefMagicOpt_MLevel",
            fields: [
                { name: "MLevel" },
            ]
        },
        {
            name: "IX__RefMagicOpt_MOptName128",
            fields: [
                { name: "MOptName128" },
            ]
        },
        {
            name: "PK__RefMagicOpt_ID",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
