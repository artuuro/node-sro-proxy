export default (db, types) => db.define('_RefShopTab', {
    Service: {
        type: types.TINYINT,
        allowNull: false
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
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    CodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    RefTabGroupCodeName: {
        type: types.STRING(129),
        allowNull: false
    },
    StrID128_Tab: {
        type: types.STRING(129),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefShopTab',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefShopTab_renewal",
            unique: true,
            fields: [
                { name: "ID" },
                { name: "Country" },
            ]
        },
    ]
});
