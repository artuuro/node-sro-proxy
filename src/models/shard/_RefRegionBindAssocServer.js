export default (db, types) => db.define('_RefRegionBindAssocServer', {
    AreaName: {
        type: types.STRING(128),
        allowNull: false
    },
    AssocServer: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefRegionBindAssocServer',
    schema: 'dbo',
    timestamps: false
});
