export default (db, types) => db.define('_UserOld', {
    UserJID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    CharID1: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    CharID2: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    CharID3: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Gold: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_UserOld',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__UserCharList",
            unique: true,
            fields: [
                { name: "UserJID" },
            ]
        },
    ]
});
