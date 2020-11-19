export default (db, types) => db.define('_RefGameWorldGroup_Config', {
    Service: {
        type: types.INTEGER,
        allowNull: false
    },
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    GroupCodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    ValueCodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    Value: {
        type: types.STRING(129),
        allowNull: false
    },
    Type: {
        type: types.STRING(20),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefGameWorldGroup_Config',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefGroupGameWorld_Config",
            fields: [
                { name: "GroupCodeName128" },
            ]
        },
        {
            name: "PK__RefGroupGameWorld_Config",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
