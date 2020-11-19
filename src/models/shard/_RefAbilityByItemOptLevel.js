export default (db, types) => db.define('_RefAbilityByItemOptLevel', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: "IX__RefAbilityByItemOptLevel"
    },
    RefItemID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_RefObjCommon',
            key: 'ID'
        },
        unique: "IX__RefAbilityByItemOptLevel_1"
    },
    ItemOptLevel: {
        type: types.TINYINT,
        allowNull: false,
        unique: "IX__RefAbilityByItemOptLevel_1"
    }
}, {
    sequelize: db,
    tableName: '_RefAbilityByItemOptLevel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefAbilityByItemOptLevel",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
        {
            name: "IX__RefAbilityByItemOptLevel_1",
            unique: true,
            fields: [
                { name: "RefItemID" },
                { name: "ItemOptLevel" },
            ]
        },
    ]
});
