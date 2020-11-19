export default (db, types) => db.define('_Inventory', {
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: '_Char',
            key: 'CharID'
        }
    },
    Slot: {
        type: types.TINYINT,
        allowNull: false,
        primaryKey: true
    },
    ItemID: {
        type: types.BIGINT,
        allowNull: false,
        references: {
            model: '_Items',
            key: 'ID64'
        }
    }
}, {
    sequelize: db,
    tableName: '_Inventory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__Inventory",
            fields: [
                { name: "ItemID" },
            ]
        },
        {
            name: "PK_Inventory",
            unique: true,
            fields: [
                { name: "CharID" },
                { name: "Slot" },
            ]
        },
    ]
});
