export default (db, types) => db.define('_RefDropGold', {
    MonLevel: {
        type: types.TINYINT,
        allowNull: false
    },
    DropProb: {
        type: types.REAL,
        allowNull: false
    },
    GoldMin: {
        type: types.INTEGER,
        allowNull: false
    },
    GoldMax: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefDropGold',
    schema: 'dbo',
    timestamps: false
});
