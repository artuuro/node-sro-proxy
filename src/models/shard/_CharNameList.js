export default (db, types) => db.define('_CharNameList', {
    CharName16: {
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
    tableName: '_CharNameList',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__CharNameList",
            unique: true,
            fields: [
                { name: "CharName16" },
                { name: "CharID" },
            ]
        },
    ]
});
