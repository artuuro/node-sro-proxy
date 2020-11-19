export default (db, types) => db.define('Tab_DBSafe_CheckState', {
    btCheckIn: {
        type: types.TINYINT,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'Tab_DBSafe_CheckState',
    schema: 'dbo',
    timestamps: false
});
