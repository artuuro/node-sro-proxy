export default (db, types) => db.define('_RefRewardPolicyToSellPackageItem', {
    Service: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    Country: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0,
        primaryKey: true,
        references: {
            model: '_RefShopObject',
            key: 'ID'
        },
        unique: "IX__RefRewardPolicyToSellPackageItem"
    },
    RefPackageItemCodeName: {
        type: types.STRING(129),
        allowNull: false,
        primaryKey: true,
        unique: "IX__RefRewardPolicyToSellPackageItem"
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
        primaryKey: true,
        unique: "IX__RefRewardPolicyToSellPackageItem"
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
    tableName: '_RefRewardPolicyToSellPackageItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefRewardPolicyToSellPackageItem",
            unique: true,
            fields: [
                { name: "Country" },
                { name: "RefPackageItemCodeName" },
                { name: "FourCC" },
            ]
        },
        {
            name: "PK__RefRewardPolicyToSellPackageItem",
            unique: true,
            fields: [
                { name: "RefPackageItemCodeName" },
                { name: "FourCC" },
                { name: "Country" },
            ]
        },
    ]
});
