export default (db, types) => db.define('_BlockedUser', {
    UserJID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    UserID: {
        type: types.STRING(128),
        allowNull: false
    },
    Type: {
        type: types.TINYINT,
        allowNull: false,
        primaryKey: true
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
    sequelize: db,//
    tableName: '_BlockedUser',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__BlockedUser__1",
            unique: true,
            fields: [
                { name: "UserJID" },
                { name: "Type" },
            ]
        },
    ]
});
