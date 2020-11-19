export default (db, types) => db.define('_RefQuestRewardItems', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    QuestID: {
        type: types.INTEGER,
        allowNull: false
    },
    QuestCodeName: {
        type: types.STRING(128),
        allowNull: false
    },
    RewardType: {
        type: types.TINYINT,
        allowNull: false
    },
    ItemCodeName: {
        type: types.STRING(128),
        allowNull: false
    },
    OptionalItemCode: {
        type: types.STRING(128),
        allowNull: false,
        defaultValue: "xxx"
    },
    OptionalItemCnt: {
        type: types.INTEGER,
        allowNull: false
    },
    AchieveQuantity: {
        type: types.INTEGER,
        allowNull: false
    },
    RentItemCodeName: {
        type: types.STRING(128),
        allowNull: false,
        defaultValue: "xxx"
    },
    Param1: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Param1_Desc: {
        type: types.STRING(128),
        allowNull: false,
        defaultValue: "xxx"
    },
    Param2: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Param2_Desc: {
        type: types.STRING(128),
        allowNull: false,
        defaultValue: "xxx"
    }
}, {
    sequelize: db,
    tableName: '_RefQuestRewardItems',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefQuestRewardItems_QuestID",
            fields: [
                { name: "QuestID" },
            ]
        },
    ]
});
