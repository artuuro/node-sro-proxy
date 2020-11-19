module.exports = (db, types) => db.define('SK_Silk', {
    JID: {
        type: types.INTEGER,
        allowNull: false
    },
    silk_own: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    silk_gift: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    silk_point: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: 'SK_Silk',
    schema: 'dbo',
    timestamps: false
});
