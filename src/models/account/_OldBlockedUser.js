export default (db, types) => db.define('_OldBlockedUser', {
    UserJID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Type: {
        type: types.TINYINT,
        allowNull: false
    },
    SerialNo: {
        type: types.INTEGER,
        allowNull: false
    },
    timeBegin: {
        type: types.DATE,
        allowNull: false
    },
    timeEnd: {
        type: types.DATE,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_OldBlockedUser',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__BlockedUser",
            fields: [
                { name: "UserJID" },
            ]
        },
        {
            name: "PK__BlockedUser",
            unique: true,
            fields: [
                { name: "UserJID" },
            ]
        },
    ]
});
