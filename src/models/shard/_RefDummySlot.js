export default (db, types) => db.define('_RefDummySlot', {
    cnt: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefDummySlot',
    schema: 'dbo',
    timestamps: false
});
