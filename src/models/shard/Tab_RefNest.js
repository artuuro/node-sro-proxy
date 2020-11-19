export default (db, types) => db.define('Tab_RefNest', {
    dwNestID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dwHiveID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dwTacticsID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nRegionDBID: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    fLocalPosX: {
        type: DataTypes.REAL,
        allowNull: true
    },
    fLocalPosY: {
        type: DataTypes.REAL,
        allowNull: true
    },
    fLocalPosZ: {
        type: DataTypes.REAL,
        allowNull: true
    },
    wInitialDir: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    nRadius: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    nGenerateRadius: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    nChampionGenPercentage: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    dwDelayTimeMin: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    dwDelayTimeMax: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    dwMaxTotalCount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    btFlag: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    btRespawn: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    btType: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'Tab_RefNest',
    schema: 'dbo',
    timestamps: false
});
