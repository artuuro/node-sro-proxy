export default (db, types) => db.define('_LogCashItem', {
    RefItemID: {
        type: types.INTEGER,
        allowNull: false
    },
    CharID: {
        type: types.INTEGER,
        allowNull: false
    },
    Cnt: {
        type: types.SMALLINT,
        allowNull: false
    },
    EventTime: {
        type: types.DATE,
        allowNull: false
    },
    Serial64: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize,
    tableName: '_LogCashItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__LogCashItem",
            fields: [
                { name: "RefItemID" },
            ]
        },
        {
            name: "IX__LogCashItemSerial",
            fields: [
                { name: "Serial64" },
            ]
        },
    ]
});
