export default (db, types) => db.define('_LogEventChar', {
    CharID: {
        type: types.INTEGER,
        allowNull: false
    },
    EventTime: {
        type: types.DATE,
        allowNull: false
    },
    EventID: {
        type: types.TINYINT,
        allowNull: false
    },
    Data1: {
        type: types.INTEGER,
        allowNull: false
    },
    Data2: {
        type: types.INTEGER,
        allowNull: false
    },
    EventPos: {
        type: types.STRING(64),
        allowNull: true
    },
    strDesc: {
        type: types.STRING(128),
        allowNull: true
    }
}, {
    sequelize,
    tableName: '_LogEventChar',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__LogEventChar",
            fields: [
                { name: "CharID" },
            ]
        },
    ]
});
