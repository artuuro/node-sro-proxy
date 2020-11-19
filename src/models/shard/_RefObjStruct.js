export default (db, types) => db.define('_RefObjStruct', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Dummy_Data: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefObjStruct',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefObjStruct",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
