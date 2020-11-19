export default (db, types) => db.define('tmp', {
    UserJID: {
        type: types.INTEGER,
        allowNull: false
    },
    UserID: {
        type: types.STRING(128),
        allowNull: false
    },
    Type: {
        type: types.TINYINT,
        allowNull: false
    },
    SerialNo: {
        type: types.INTEGER,
        allowNull: false
    },
    timeBegin: {
        type: types.DATE,
        allowNull: false
    },
    timeEnd: {
        type: types.DATE,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'tmp',
    schema: 'dbo',
    timestamps: false
});
