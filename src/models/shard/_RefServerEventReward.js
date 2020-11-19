export default (db, types) => db.define('_RefServerEventReward', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    RewardID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    OwnerServerEventID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_RefServerEvent',
            key: 'ID'
        }
    },
    RefRewardID: {
        type: types.INTEGER,
        allowNull: false
    },
    Quantity: {
        type: types.TINYINT,
        allowNull: false
    },
    RewardClass: {
        type: types.TINYINT,
        allowNull: false
    },
    MasterReward: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefServerEventReward',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK___RefServerEventR__681C306A",
            unique: true,
            fields: [
                { name: "RewardID" },
            ]
        },
    ]
});
