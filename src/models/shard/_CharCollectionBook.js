export default (db, types) => db.define('_CharCollectionBook', {
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ThemeID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    SlotIndex: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    RegDate: {
        type: "SMALLDATETIME",
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_CharCollectionBook',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__CharCollectionBook",
            unique: true,
            fields: [
                { name: "CharID" },
                { name: "ThemeID" },
                { name: "SlotIndex" },
            ]
        },
    ]
});
