export default (db, types) => db.define('_RefServerEventReward_ExpUPForPlayers', {
    OwnerRewardID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_RefServerEventReward',
            key: 'RewardID'
        }
    },
    ApplyTime: {
        type: types.INTEGER,
        allowNull: false
    },
    ApplyExpRatio: {
        type: types.TINYINT,
        allowNull: false
    },
    ApplySExpRatio: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefServerEventReward_ExpUPForPlayers',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX_RefServerEventReward_ExpUPForPlayers",
            fields: [
                { name: "OwnerRewardID" },
            ]
        },
    ]
});
