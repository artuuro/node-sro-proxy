export default (db, types) => db.define('_AccountJID', {
    AccountID: {
        type: types.STRING(128),
        allowNull: false,
        primaryKey: true
    },
    JID: {
        type: types.INTEGER,
        allowNull: false,
        unique: "IX__AccountJID"
    },
    Gold: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_AccountJID',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__AccountJID",
            unique: true,
            fields: [
                { name: "JID" },
            ]
        },
        {
            name: "PK__AccountJID",
            unique: true,
            fields: [
                { name: "AccountID" },
            ]
        },
    ]
});
