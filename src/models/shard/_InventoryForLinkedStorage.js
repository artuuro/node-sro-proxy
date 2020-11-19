export default (db, types) => db.define('_InventoryForLinkedStorage', {
    LinkedItemID: {
        type: types.BIGINT,
        allowNull: false,
        primaryKey: true
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
    tableName: '_InventoryForLinkedStorage',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__InventoryForLinkedStorage",
            unique: true,
            fields: [
                { name: "LinkedItemID" },
                { name: "Slot" },
            ]
        },
    ]
});
