export default (db, types) => db.define('Test_HN', {
    STT: {
        type: types.FLOAT,
        allowNull: true
    },
    Username: {
        type: types.STRING(255),
        allowNull: true
    },
    CodeCB: {
        type: types.STRING(255),
        allowNull: true
    },
    'Họ': {
        type: types.STRING(255),
        allowNull: true
    },
    'Tên': {
        type: types.STRING(255),
        allowNull: true
    },
    Email: {
        type: types.STRING(255),
        allowNull: true
    },
    password: {
        type: types.STRING(255),
        allowNull: true
    },
    F_ONLINE: {
        type: types.FLOAT,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'Test_HN',
    schema: 'dbo',
    timestamps: false
});
