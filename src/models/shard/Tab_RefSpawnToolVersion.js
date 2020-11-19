export default (db, types) => db.define('Tab_RefSpawnToolVersion', {
    dwRefDataVersion: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    szVersionDescString: {
        type: types.STRING(128),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'Tab_RefSpawnToolVersion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__Tab_RefSpawnTool__0F35FD8B",
            unique: true,
            fields: [
                { name: "dwRefDataVersion" },
            ]
        },
    ]
});
