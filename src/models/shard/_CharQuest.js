export default (db, types) => db.define('_CharQuest', {
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    QuestID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Status: {
        type: types.TINYINT,
        allowNull: false
    },
    AchievementCount: {
        type: types.SMALLINT,
        allowNull: false
    },
    StartTime: {
        type: "SMALLDATETIME",
        allowNull: false
    },
    EndTime: {
        type: "SMALLDATETIME",
        allowNull: false
    },
    QuestData1: {
        type: types.BIGINT,
        allowNull: false
    },
    QuestData2: {
        type: types.BIGINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_CharQuest',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__CharQuest",
            unique: true,
            fields: [
                { name: "CharID" },
                { name: "QuestID" },
            ]
        },
    ]
});
