export default (db, types) => db.define('_RefClimate', {
    ID: {
        type: types.INTEGER,
        allowNull: false
    },
    InitialWeather: {
        type: types.TINYINT,
        allowNull: false
    },
    InitialAmount: {
        type: types.TINYINT,
        allowNull: false
    },
    ChangeWeather: {
        type: types.TINYINT,
        allowNull: false
    },
    Division: {
        type: types.TINYINT,
        allowNull: false
    },
    Duration: {
        type: types.INTEGER,
        allowNull: false
    },
    DurationVariance: {
        type: types.INTEGER,
        allowNull: false
    },
    Snowfall: {
        type: types.TINYINT,
        allowNull: false
    },
    SnowfallVariance: {
        type: types.TINYINT,
        allowNull: false
    },
    ProbSnow: {
        type: types.TINYINT,
        allowNull: false
    },
    Rainfall: {
        type: types.TINYINT,
        allowNull: false
    },
    RainfallVariance: {
        type: types.TINYINT,
        allowNull: false
    },
    ProbRain: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefClimate',
    schema: 'dbo',
    timestamps: false
});
