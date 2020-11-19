export default (db, types) => db.define('_RefCollectionBook_Item', {
    Service: {
        type: types.TINYINT,
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
    ThemeCodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    SlotIndex: {
        type: types.INTEGER,
        allowNull: false
    },
    Story128: {
        type: types.STRING(129),
        allowNull: false
    },
    DDJFile128: {
        type: types.STRING(129),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefCollectionBook_Item',
    schema: 'dbo',
    timestamps: false
});
