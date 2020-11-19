export default (db, types) => db.define('_InvCOS', {
    COSID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: '_CharCOS',
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
        allowNull: true,
        references: {
            model: '_Items',
            key: 'ID64'
        }
    }
}, {
    sequelize: db,
    tableName: '_InvCOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__InvCOS",
            fields: [
                { name: "ItemID" },
            ]
        },
        {
            name: "PK__InvCOS",
            unique: true,
            fields: [
                { name: "COSID" },
                { name: "Slot" },
            ]
        },
    ]
});
