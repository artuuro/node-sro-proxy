export default (db, types) => db.define('_RefConditionToSellScrapItem', {
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
        unique: "IX__RefConditionToSellScrapItem"
    },
    Cash: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefConditionToSellScrapItem"
    },
    TypeID1: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefConditionToSellScrapItem"
    },
    TypeID2: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefConditionToSellScrapItem"
    },
    TypeID3: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefConditionToSellScrapItem"
    },
    TypeID4: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefConditionToSellScrapItem"
    },
    RefItemCodeName: {
        type: types.STRING(129),
        allowNull: false,
        unique: "IX__RefConditionToSellScrapItem"
    },
    AcceptOrReject: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefConditionToSellScrapItem"
    },
    FourCC: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0,
        unique: "IX__RefConditionToSellScrapItem"
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
    tableName: '_RefConditionToSellScrapItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefConditionToSellScrapItem",
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
