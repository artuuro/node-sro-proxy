export default (db, types) => db.define('_LogServerEvent', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    EventTime: {
        type: types.DATE,
        allowNull: false
    },
    ServerEventID: {
        type: types.INTEGER,
        allowNull: false
    },
    LogType: {
        type: types.TINYINT,
        allowNull: false
    },
    strDesc: {
        type: types.STRING(128),
        allowNull: true
    }
}, {
    sequelize,
    tableName: '_LogServerEvent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX_LogServerEvent_EventTime",
            fields: [
                { name: "EventTime" },
            ]
        },
        {
            name: "IX_LogServerEvent_ServerEventID",
            fields: [
                { name: "ServerEventID" },
            ]
        },
        {
            name: "PK___LogServerEvent__300424B4",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
