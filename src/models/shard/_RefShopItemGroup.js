export default (db, types) => db.define('_RefShopItemGroup', {
    Service: {
        type: types.INTEGER,
        allowNull: false
    },
    GroupID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    CodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    StrID128_Group: {
        type: types.STRING(129),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefShopItemGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefShopItemGroup",
            unique: true,
            fields: [
                { name: "GroupID" },
            ]
        },
    ]
});
