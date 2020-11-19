export default (db, types) => db.define('_RefEvent', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    CodeName: {
        type: types.STRING(128),
        allowNull: false
    },
    DescName: {
        type: types.STRING(128),
        allowNull: false
    },
    ScheduleName: {
        type: types.STRING(128),
        allowNull: true,
        defaultValue: ""
    },
    ScheduleCount: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefEvent',
    schema: 'dbo',
    timestamps: false
});
