export default (db, types) => db.define('SK_ITEM_GuardLog', {
    autoID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    serial64: {
        type: types.BIGINT,
        allowNull: true
    },
    gremain: {
        type: types.INTEGER,
        allowNull: true
    },
    shardID: {
        type: types.INTEGER,
        allowNull: true
    },
    optionLvl: {
        type: types.INTEGER,
        allowNull: true
    },
    LastGuard: {
        type: types.DATE,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'SK_ITEM_GuardLog',
    schema: 'dbo',
    timestamps: false
});
