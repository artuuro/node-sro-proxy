export default (db, types) => db.define('_RefAccessPermissionOfShop', {
    Service: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    Country: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
            model: '_RefShopObject',
            key: 'ID'
        },
        unique: "IX__RefAccessPermissionOfShop"
    },
    RefShopCodeName: {
        type: types.STRING(129),
        allowNull: false,
        unique: "IX__RefAccessPermissionOfShop"
    },
    AcceptOrReject: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    FourCC: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefAccessPermissionOfShop"
    },
    Param1: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Param1_Desc128: {
        type: types.STRING(129),
        allowNull: false,
        defaultValue: "xxx"
    },
    Param2: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Param2_Desc128: {
        type: types.STRING(129),
        allowNull: false,
        defaultValue: "xxx"
    },
    Param3: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Param3_Desc128: {
        type: types.STRING(129),
        allowNull: false,
        defaultValue: "xxx"
    },
    Param4: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Param4_Desc128: {
        type: types.STRING(129),
        allowNull: false,
        defaultValue: "xxx"
    }
}, {
    sequelize: db,
    tableName: '_RefAccessPermissionOfShop',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefAccessPermissionOfShop",
            unique: true,
            fields: [
                { name: "Country" },
                { name: "RefShopCodeName" },
                { name: "FourCC" },
            ]
        },
    ]
});
