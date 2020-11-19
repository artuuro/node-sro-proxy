export default (db, types) => db.define('_RefScheduleDefine', {
    ScheduleDefineIdx: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ScheduleName: {
        type: types.STRING(124),
        allowNull: false
    },
    Description: {
        type: types.STRING(2000),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_RefScheduleDefine',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK___RefScheduleDefi__4077880D",
            unique: true,
            fields: [
                { name: "ScheduleDefineIdx" },
            ]
        },
    ]
});
