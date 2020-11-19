export default (db, types) => db.define('_RefPricePolicyOfItem', {
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
    PaymentDevice: {
        type: types.INTEGER,
        allowNull: false
    },
    PreviousCost: {
        type: types.INTEGER,
        allowNull: false
    },
    Cost: {
        type: types.INTEGER,
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
        allowNull: true
    },
    Param4: {
        type: types.INTEGER,
        allowNull: false
    },
    Param4_Desc128: {
        type: types.STRING(129),
        allowNull: false
    },
    index: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize: db,
    tableName: '_RefPricePolicyOfItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefPricePolicyOfItem",
            unique: true,
            fields: [
                { name: "index" },
            ]
        },
    ]
});
