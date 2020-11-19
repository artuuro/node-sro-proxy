export default (db, types) => db.define('_RefMappingShopGroup', {
    Service: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    Country: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0,
        primaryKey: true,
        references: {
            model: '_RefShopObject',
            key: 'ID'
        }
    },
    RefShopGroupCodeName: {
        type: types.STRING(129),
        allowNull: false,
        primaryKey: true
    },
    RefShopCodeName: {
        type: types.STRING(129),
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize: db,
    tableName: '_RefMappingShopGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefMappingShopGroup",
            unique: true,
            fields: [
                { name: "Country" },
                { name: "RefShopGroupCodeName" },
                { name: "RefShopCodeName" },
            ]
        },
    ]
});
