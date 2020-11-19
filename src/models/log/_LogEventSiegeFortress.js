export default (db, types) => db.define('_LogEventSiegeFortress', {
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    FortressID: {
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
    CharID: {
        type: types.INTEGER,
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
    strDesc: {
        type: types.STRING(128),
        allowNull: true
    }
}, {
    sequelize,
    tableName: '_LogEventSiegeFortress',
    schema: 'dbo',
    timestamps: false
});
