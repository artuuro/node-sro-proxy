export default (db, types) => db.define('SK_CharRenameLog', {
    id: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    JID: {
        type: types.INTEGER,
        allowNull: true
    },
    struserid: {
        type: types.STRING(50),
        allowNull: true
    },
    old_char: {
        type: types.STRING(20),
        allowNull: true
    },
    new_char: {
        type: types.STRING(20),
        allowNull: true
    },
    server: {
        type: types.STRING(20),
        allowNull: true
    },
    timechange: {
        type: types.DATE,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'SK_CharRenameLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__ChangeNameOfChar",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
    ]
});
