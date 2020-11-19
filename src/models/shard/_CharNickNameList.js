export default (db, types) => db.define('_CharNickNameList', {
    NickName16: {
        type: types.STRING(17),
        allowNull: false,
        primaryKey: true
    },
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize: db,
    tableName: '_CharNickNameList',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX_CharNickNameList",
            fields: [
                { name: "CharID" },
            ]
        },
        {
            name: "PK__CharNickNameList",
            unique: true,
            fields: [
                { name: "NickName16" },
                { name: "CharID" },
            ]
        },
    ]
});
