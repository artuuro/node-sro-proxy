export default (db, types) => db.define('_Friend', {
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_Char',
            key: 'CharID'
        }
    },
    FriendCharID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_Char',
            key: 'CharID'
        }
    },
    FriendCharName: {
        type: types.STRING(64),
        allowNull: false
    },
    RefObjID: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_Friend',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__Friend",
            fields: [
                { name: "CharID" },
            ]
        },
    ]
});
