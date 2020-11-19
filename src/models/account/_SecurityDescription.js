export default (db, types) => db.define('_SecurityDescription', {
    nID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    szName: {
        type: types.STRING(64),
        allowNull: false
    },
    szDesc: {
        type: types.STRING(256),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_SecurityDescription',
    schema: 'dbo',
    timestamps: false
});
