export default (db, types) => db.define('SK_gamebang_ip', {
    nID: {
        type: types.SMALLINT,
        allowNull: false
    },
    ip: {
        type: types.INTEGER,
        allowNull: false
    },
    capacity: {
        type: types.SMALLINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'SK_gamebang_ip',
    schema: 'dbo',
    timestamps: false
});
