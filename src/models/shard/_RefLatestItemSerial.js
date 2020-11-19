export default (db, types) => db.define('_RefLatestItemSerial', {
    LatestItemSerial: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_RefLatestItemSerial',
    schema: 'dbo',
    timestamps: false
});
