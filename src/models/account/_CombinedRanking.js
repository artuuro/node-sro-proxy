export default (db, types) => db.define('_CombinedRanking', {
    ID: {
        autoIncrement: true,
        type: types.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: types.STRING,
        allowNull: false
    },
    kills: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    deaths: {
        type: types.BIGINT,
        allowNull: false
    },
    uniques: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    lvl: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    job: {
        type: types.STRING,
        allowNull: false
    },
    char: {
        type: types.STRING,
        allowNull: false
    },
    guild: {
        type: types.STRING,
        allowNull: false
    },
    kills_job: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    deaths_job: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    gold: {
        type: types.BIGINT,
        allowNull: false
    },
    last_login: {
        type: types.DATE,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_CombinedRanking',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__CombinedRanking",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
