export default (db, types) => db.define('_RefCountryNameAndCode', {
    code: {
        type: types.CHAR(2),
        allowNull: false,
        primaryKey: true
    },
    szCountryName: {
        type: types.STRING(64),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefCountryNameAndCode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefCountryNameAndCode",
            unique: true,
            fields: [
                { name: "code" },
            ]
        },
    ]
});
