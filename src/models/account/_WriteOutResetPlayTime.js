export default (db, types) => db.define('_WriteOutResetPlayTime', {
    LatestResetTime: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {
    sequelize: db,
    tableName: '_WriteOutResetPlayTime',
    schema: 'dbo',
    timestamps: false
});
