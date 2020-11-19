export default (db, types) => db.define('PW_Restore', {
    UserID: {
        type: types.STRING(25),
        allowNull: false
    },
    RandomPASS: {
        type: types.STRING,
        allowNull: false
    },
    createtime: {
        type: types.DATE,
        allowNull: false
    },
    ipaddr: {
        type: types.STRING,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'PW_Restore',
    schema: 'dbo',
    timestamps: false
});
