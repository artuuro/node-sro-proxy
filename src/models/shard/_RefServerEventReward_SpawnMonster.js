export default (db, types) => db.define('_RefServerEventReward_SpawnMonster', {
    OwnerRewardID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_RefServerEventReward',
            key: 'RewardID'
        }
    },
    RegionID: {
        type: types.INTEGER,
        allowNull: false
    },
    PosX: {
        type: types.REAL,
        allowNull: false
    },
    PosY: {
        type: types.REAL,
        allowNull: false
    },
    PosZ: {
        type: types.REAL,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefServerEventReward_SpawnMonster',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX_RefServerEventReward_SpawnMonster",
            fields: [
                { name: "OwnerRewardID" },
            ]
        },
    ]
});
