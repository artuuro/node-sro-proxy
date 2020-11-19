export default (db, types) => db.define('_LatestItemSerial', {
    LatestItemSerial: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_LatestItemSerial',
    schema: 'dbo',
    timestamps: false
});
