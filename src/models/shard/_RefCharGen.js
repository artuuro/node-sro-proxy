export default (db, types) => db.define('_RefCharGen', {
    Service: {
        type: types.INTEGER,
        allowNull: false
    },
    RefObjID: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefCharGen',
    schema: 'dbo',
    timestamps: false
});
