export default (db, types) => db.define('Tab_RefHive', {
    dwHiveID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    btKeepMonsterCountType: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    dwOverwriteMaxTotalCount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fMonsterCountPerPC: {
        type: DataTypes.REAL,
        allowNull: true
    },
    dwSpawnSpeedIncreaseRate: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    dwMaxIncreaseRate: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    btFlag: {
        type: DataTypes.TINYINT,
        allowNull: true
    },
    GameWorldID: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 1
    },
    HatchObjType: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: 1
    },
    szDescString128: {
        type: DataTypes.STRING(128),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'Tab_RefHive',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK_Tab_RefHive",
            unique: true,
            fields: [
                { name: "dwHiveID" },
            ]
        },
    ]
});
