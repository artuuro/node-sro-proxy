export default (db, types) => db.define('test_item_TNET', {
    id: {
        type: types.FLOAT,
        allowNull: true
    },
    CodeName: {
        type: types.STRING(255),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'test_item_TNET',
    schema: 'dbo',
    timestamps: false
});
