export default (db, types) => db.define('_LogSchedule', {
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    ServerType: {
        type: types.STRING(124),
        allowNull: false
    },
    ServerBodyID: {
        type: types.INTEGER,
        allowNull: false
    },
    ScheduleDefine: {
        type: types.STRING(124),
        allowNull: false
    },
    ScheduleIdx: {
        type: types.INTEGER,
        allowNull: false
    },
    Type: {
        type: types.STRING(10),
        allowNull: false
    },
    OccureTime: {
        type: types.DATE,
        allowNull: false
    }
}, {
    sequelize,
    tableName: '_LogSchedule',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "CX_LOG_SCHEDULE_OCCURETIME",
            fields: [
                { name: "OccureTime" },
            ]
        },
        {
            name: "IX_LOG_SCHEDULE_IDX",
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
