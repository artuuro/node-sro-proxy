export default (db, types) => db.define('_RefMappingShopWithTab', {
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
    RefShopCodeName: {
        type: types.STRING(129),
        allowNull: false,
        primaryKey: true
    },
    RefTabGroupCodeName: {
        type: types.STRING(129),
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize: db,
    tableName: '_RefMappingShopWithTab',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefMappingShopWithTab",
            unique: true,
            fields: [
                { name: "Country" },
                { name: "RefShopCodeName" },
                { name: "RefTabGroupCodeName" },
            ]
        },
    ]
});
