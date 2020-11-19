export default (db, types) => db.define('_GuildChest', {
    GuildID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: '_Guild',
            key: 'ID'
        }
    },
    Slot: {
        type: types.TINYINT,
        allowNull: false,
        primaryKey: true
    },
    ItemID: {
        type: types.BIGINT,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_GuildChest',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__GuildChest",
            unique: true,
            fields: [
                { name: "GuildID" },
                { name: "Slot" },
            ]
        },
    ]
});
