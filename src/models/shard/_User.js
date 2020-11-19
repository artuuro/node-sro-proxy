export default (db, types) => db.define('_User', {
    UserJID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_AccountJID',
            key: 'JID'
        }
    },
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_Char',
            key: 'CharID'
        }
    }
}, {
    sequelize: db,
    tableName: '_User',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__CharID",
            unique: true,
            fields: [
                { name: "CharID" },
            ]
        },
        {
            name: "IX__User",
            fields: [
                { name: "UserJID" },
            ]
        },
    ]
});
