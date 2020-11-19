export default (db, types) => db.define('_Chest', {
    UserJID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: '_AccountJID',
            key: 'JID'
        }
    },
    Slot: {
        type: types.TINYINT,
        allowNull: false,
        primaryKey: true
    },
    ItemID: {
        type: types.BIGINT,
        allowNull: true,
        references: {
            model: '_Items',
            key: 'ID64'
        }
    }
}, {
    sequelize: db,
    tableName: '_Chest',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__Chest",
            fields: [
                { name: "ItemID" },
            ]
        },
        {
            name: "PK__Chest",
            unique: true,
            fields: [
                { name: "UserJID" },
                { name: "Slot" },
            ]
        },
    ]
});
