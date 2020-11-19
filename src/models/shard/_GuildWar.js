export default (db, types) => db.define('_GuildWar', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    WarType: {
        type: types.TINYINT,
        allowNull: false
    },
    VictoryPointIndex: {
        type: types.TINYINT,
        allowNull: false
    },
    LodgedGold: {
        type: types.INTEGER,
        allowNull: false
    },
    WarEndTime: {
        type: "SMALLDATETIME",
        allowNull: true
    },
    Guild1: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_Guild',
            key: 'ID'
        }
    },
    Guild2: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_Guild',
            key: 'ID'
        }
    },
    PointGain1: {
        type: types.INTEGER,
        allowNull: false
    },
    PointGain2: {
        type: types.INTEGER,
        allowNull: false
    },
    Data1: {
        type: types.INTEGER,
        allowNull: false
    },
    Data2: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_GuildWar',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__GuildWar",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
