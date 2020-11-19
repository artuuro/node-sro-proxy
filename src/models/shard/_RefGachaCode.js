export default (db, types) => db.define('_RefGachaCode', {
    CodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    GachaSetID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    }
}, {
    sequelize: db,
    tableName: '_RefGachaCode',
    schema: 'dbo',
    timestamps: false
});
