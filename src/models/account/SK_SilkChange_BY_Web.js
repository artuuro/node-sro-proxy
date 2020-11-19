export default (db, types) => db.define('SK_SilkChange_BY_Web', {
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    JID: {
        type: types.INTEGER,
        allowNull: false
    },
    silk_remain: {
        type: types.INTEGER,
        allowNull: false
    },
    silk_offset: {
        type: types.INTEGER,
        allowNull: false
    },
    silk_type: {
        type: types.TINYINT,
        allowNull: false
    },
    reason: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'SK_SilkChange_BY_Web',
    schema: 'dbo',
    timestamps: false
});
