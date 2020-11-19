export default (db, types) => db.define('_UserBalance_Nhat', {
    JID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Balance: {
        type: types.DOUBLE,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_UserBalance_Nhat',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__UserBalance_Nhat",
            unique: true,
            fields: [
                { name: "JID" },
            ]
        },
    ]
});
