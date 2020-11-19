export default (db, types) => db.define('Email_Change', {
    UserID: {
        type: types.STRING(25),
        allowNull: false
    },
    RandomPASS: {
        type: types.STRING,
        allowNull: false
    },
    createtime: {
        type: types.DATE,
        allowNull: false
    },
    ipaddr: {
        type: types.STRING,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'Email_Change',
    schema: 'dbo',
    timestamps: false
});
