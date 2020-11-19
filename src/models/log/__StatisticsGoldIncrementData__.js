export default (db, types) => db.define('__StatisticsGoldIncrementData__', {
    BeginDate: {
        type: types.DATE,
        allowNull: false
    },
    EndDate: {
        type: types.DATE,
        allowNull: true
    },
    Paid: {
        type: types.BIGINT,
        allowNull: true
    },
    Income: {
        type: types.BIGINT,
        allowNull: true
    },
    HunterProfit: {
        type: types.BIGINT,
        allowNull: true
    }
}, {
    sequelize,
    tableName: '__StatisticsGoldIncrementData__',
    schema: 'sro_servers_vt',
    timestamps: false
});
