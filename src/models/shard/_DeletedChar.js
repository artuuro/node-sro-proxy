import Sequelize from 'sequelize';
export default (db, types) => db.define('_DeletedChar', {
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    UserJID: {
        type: types.INTEGER,
        allowNull: false
    },
    DeletedDate: {
        type: types.DATE,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_DeletedChar',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__DeletedChar",
            fields: [
                { name: "UserJID" },
            ]
        },
        {
            name: "PK__DeletedChar",
            unique: true,
            fields: [
                { name: "CharID" },
            ]
        },
    ]
});
