export default (db, types) => db.define('Item_Quay_TNET', {
    CodeName: {
        type: types.STRING(255),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'Item_Quay_TNET',
    schema: 'dbo',
    timestamps: false
});
