export default (db, types) => db.define('_SecurityDescriptionGroup', {
    nID: {
        type: types.TINYINT,
        allowNull: false,
        autoIncrement: true
    },
    szName: {
        type: types.STRING(32),
        allowNull: false
    },
    szDesc: {
        type: types.STRING(256),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_SecurityDescriptionGroup',
    schema: 'dbo',
    timestamps: false
});
