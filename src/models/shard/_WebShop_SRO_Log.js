export default (db, types) => db.define('_WebShop_SRO_Log', {
    ID: {
        autoIncrement: true,
        type: types.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    JID: {
        type: types.INTEGER,
        allowNull: false
    },
    IP: {
        type: types.CHAR(16),
        allowNull: false
    },
    CodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    Balance_Before_Buy: {
        type: types.DOUBLE,
        allowNull: false
    },
    Balance_After_Buy: {
        type: types.DOUBLE,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_WebShop_SRO_Log',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__WebShop_SRO_Log",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
