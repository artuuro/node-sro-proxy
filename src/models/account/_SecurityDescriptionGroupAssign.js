export default (db, types) => db.define('_SecurityDescriptionGroupAssign', {
    nGroupID: {
        type: types.TINYINT,
        allowNull: false
    },
    nDescriptionID: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_SecurityDescriptionGroupAssign',
    schema: 'dbo',
    timestamps: false
});
