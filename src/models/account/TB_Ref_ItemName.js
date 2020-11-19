export default (db, types) => db.define('TB_Ref_ItemName', {
    ITEM_ID: {
        type: types.FLOAT,
        allowNull: true
    },
    ITEM_SILK: {
        type: types.FLOAT,
        allowNull: true
    },
    ITEM_NAME: {
        type: types.STRING(255),
        allowNull: true
    },
    ITEM_NAME_UK: {
        type: types.STRING(255),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'TB_Ref_ItemName',
    schema: 'dbo',
    timestamps: false
});
