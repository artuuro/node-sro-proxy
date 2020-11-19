export default (db, types) => db.define('_RefRegionBindAssocServer_bak', {
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
    tableName: '_RefRegionBindAssocServer_bak',
    schema: 'dbo',
    timestamps: false
});
