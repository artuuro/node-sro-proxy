export default (db, types) => db.define('_LogEventPVP', {
    isSent: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    KilledCharID: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    JobType: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    EventTime: {
        type: types.DATE,
        allowNull: true
    },
    EventLocation: {
        type: types.STRING(128),
        allowNull: true
    },
    strDesc: {
        type: types.STRING(128),
        allowNull: true
    }
}, {
    sequelize,
    tableName: '_LogEventPVP',
    schema: 'dbo',
    timestamps: false
});
