export default (db, types) => db.define('_Notice', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ContentID: {
        type: types.TINYINT,
        allowNull: false
    },
    Subject: {
        type: types.STRING(80),
        allowNull: false
    },
    Article: {
        type: types.STRING(1024),
        allowNull: false
    },
    EditDate: {
        type: types.DATE,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_Notice',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__Notice",
            fields: [
                { name: "ContentID" },
            ]
        },
        {
            name: "PK__Notice",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
