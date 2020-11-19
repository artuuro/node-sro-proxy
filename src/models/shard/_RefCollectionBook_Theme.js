export default (db, types) => db.define('_RefCollectionBook_Theme', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    ID: {
        type: types.INTEGER,
        allowNull: false
    },
    CodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    ObjName128: {
        type: types.STRING(129),
        allowNull: false
    },
    Name128: {
        type: types.STRING(129),
        allowNull: false
    },
    Desc128: {
        type: types.STRING(129),
        allowNull: false
    },
    CompleteNum: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefCollectionBook_Theme',
    schema: 'dbo',
    timestamps: false
});
