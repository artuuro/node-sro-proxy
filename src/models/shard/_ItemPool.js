export default (db, types) => db.define('_ItemPool', {
    ItemID: {
        type: types.BIGINT,
        allowNull: false,
        primaryKey: true,
        references: {
            model: '_Items',
            key: 'ID64'
        }
    },
    InUse: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_ItemPool',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__ItemPool",
            fields: [
                { name: "InUse" },
            ]
        },
        {
            name: "PK__ItemPool",
            unique: true,
            fields: [
                { name: "ItemID" },
            ]
        },
    ]
});
