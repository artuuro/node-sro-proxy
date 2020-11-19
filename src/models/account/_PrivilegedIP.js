export default (db, types) => db.define('_PrivilegedIP', {
    IP1: {
        type: types.TINYINT,
        allowNull: false
    },
    IP2: {
        type: types.TINYINT,
        allowNull: false
    },
    IP3: {
        type: types.TINYINT,
        allowNull: false
    },
    IP4: {
        type: types.TINYINT,
        allowNull: false
    },
    IP5: {
        type: types.TINYINT,
        allowNull: false
    },
    IP6: {
        type: types.TINYINT,
        allowNull: false
    },
    IP7: {
        type: types.TINYINT,
        allowNull: false
    },
    IP8: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_PrivilegedIP',
    schema: 'dbo',
    timestamps: false
});
