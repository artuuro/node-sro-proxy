export default (db, types) => db.define('_ServiceManagerLog', {
    nUserID: {
        type: types.INTEGER,
        allowNull: false
    },
    EventTime: {
        type: types.DATE,
        allowNull: false
    },
    szLog: {
        type: types.STRING(256),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_ServiceManagerLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__ServiceManagerLog",
            fields: [
                { name: "nUserID" },
            ]
        },
    ]
});
