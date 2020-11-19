export default (db, types) => db.define('_FlagWorld_EventParticipants', {
    JID: {
        type: types.INTEGER,
        allowNull: false
    },
    LatestAttempt: {
        type: types.DATE,
        allowNull: false
    },
    Count: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_FlagWorld_EventParticipants',
    schema: 'dbo',
    timestamps: false
});
