export default (db, types) => db.define('_RefRewardPolicyToSellScrapItem', {
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
        unique: "IX__RefRewardPolicyToSellScrapItem"
    },
    Cash: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefRewardPolicyToSellScrapItem"
    },
    TypeID1: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefRewardPolicyToSellScrapItem"
    },
    TypeID2: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefRewardPolicyToSellScrapItem"
    },
    TypeID3: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefRewardPolicyToSellScrapItem"
    },
    TypeID4: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefRewardPolicyToSellScrapItem"
    },
    RefItemCodeName: {
        type: types.STRING(129),
        allowNull: false,
        unique: "IX__RefRewardPolicyToSellScrapItem"
    },
    AcceptOrReject: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefRewardPolicyToSellScrapItem"
    },
    FourCC: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefRewardPolicyToSellScrapItem"
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
    tableName: '_RefRewardPolicyToSellScrapItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefRewardPolicyToSellScrapItem",
            unique: true,
            fields: [
                { name: "Country" },
                { name: "Cash" },
                { name: "TypeID1" },
                { name: "TypeID2" },
                { name: "TypeID3" },
                { name: "TypeID4" },
                { name: "RefItemCodeName" },
                { name: "AcceptOrReject" },
                { name: "FourCC" },
            ]
        },
    ]
});
