export default (db, types) => db.define('_LogEventItem', {
    EventTime: {
        type: types.DATE,
        allowNull: false
    },
    CharID: {
        type: types.INTEGER,
        allowNull: false
    },
    ItemRefID: {
        type: types.INTEGER,
        allowNull: false
    },
    dwData: {
        type: types.INTEGER,
        allowNull: false
    },
    TargetStorage: {
        type: types.TINYINT,
        allowNull: false
    },
    Operation: {
        type: types.TINYINT,
        allowNull: false
    },
    Slot_From: {
        type: types.TINYINT,
        allowNull: false
    },
    Slot_To: {
        type: types.TINYINT,
        allowNull: false
    },
    EventPos: {
        type: types.STRING(64),
        allowNull: true
    },
    strDesc: {
        type: types.STRING(128),
        allowNull: true
    },
    Serial64: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    Gold: {
        type: types.BIGINT,
        allowNull: true,
        defaultValue: 0
    }
}, {
    sequelize,
    tableName: '_LogEventItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__LogEventItem",
            fields: [
                { name: "CharID" },
            ]
        },
        {
            name: "IX__LogEventItemSerial",
            fields: [
                { name: "Serial64" },
            ]
        },
    ]
});
