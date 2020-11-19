export default (db, types) => db.define('_BlackNameList', {
    BlacklistName: {
        type: types.STRING(255),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_BlackNameList',
    schema: 'dbo',
    timestamps: false
});
