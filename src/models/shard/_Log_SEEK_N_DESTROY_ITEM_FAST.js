export default (db, types) => db.define('_Log_SEEK_N_DESTROY_ITEM_FAST', {
    DeletedTime: {
        type: types.DATE,
        allowNull: true
    },
    OwnerType: {
        type: types.TINYINT,
        allowNull: true
    },
    OwnerID: {
        type: types.INTEGER,
        allowNull: true
    },
    ID64: {
        type: types.BIGINT,
        allowNull: true
    },
    CodeName: {
        type: types.STRING(129),
        allowNull: true
    },
    OptLevel: {
        type: types.TINYINT,
        allowNull: true
    },
    Variance: {
        type: types.BIGINT,
        allowNull: true
    },
    Data: {
        type: types.INTEGER,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_Log_SEEK_N_DESTROY_ITEM_FAST',
    schema: 'dbo',
    timestamps: false
});
