export default (db, types) => db.define('_InventoryForAvatar', {
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
    tableName: '_InventoryForAvatar',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__InventoryForAvatar",
            fields: [
                { name: "ItemID" },
            ]
        },
        {
            name: "PK__InventoryForAvatar",
            unique: true,
            fields: [
                { name: "CharID" },
                { name: "Slot" },
            ]
        },
    ]
});
