export default (db, types) => db.define('_RefGachaNpcMap', {
    Service: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    NPC_ID: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0,
        primaryKey: true
    },
    SelectionGachaID: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    WasteGachaID: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_RefGachaNpcMap',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefGachaNpc",
            unique: true,
            fields: [
                { name: "NPC_ID" },
            ]
        },
    ]
});
