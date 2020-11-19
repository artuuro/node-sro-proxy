export default (db, types) => db.define('_RefServerEvent', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    ID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    DetectingTargetType: {
        type: types.TINYINT,
        allowNull: false
    },
    DetectingTargetID: {
        type: types.INTEGER,
        allowNull: false
    },
    Name: {
        type: types.STRING(128),
        allowNull: false
    },
    BeginDate: {
        type: types.DATE,
        allowNull: false
    },
    EndDate: {
        type: types.DATE,
        allowNull: false
    },
    NotificationTypeDetectingTarget: {
        type: types.TINYINT,
        allowNull: false
    },
    AchievementConditionType: {
        type: types.TINYINT,
        allowNull: false
    },
    AchievementConditionLevel: {
        type: types.SMALLINT,
        allowNull: false
    },
    AchievementCondition: {
        type: types.INTEGER,
        allowNull: false
    },
    RewardTarget: {
        type: types.TINYINT,
        allowNull: false
    },
    GiveRewardDelayTime: {
        type: types.INTEGER,
        allowNull: false
    },
    ActivateClientUI: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefServerEvent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: " IX_RefServerEvent_Name ",
            fields: [
                { name: "Name" },
            ]
        },
        {
            name: "PK___RefServerEvent__67280C31",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
