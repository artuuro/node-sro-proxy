export default (db, types) => db.define('__TrijobRanking__', {
    ShardID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    TrijobType: {
        type: types.TINYINT,
        allowNull: false,
        primaryKey: true
    },
    RankType: {
        type: types.TINYINT,
        allowNull: false,
        primaryKey: true
    },
    Rank: {
        type: types.TINYINT,
        allowNull: false,
        primaryKey: true
    },
    NickName: {
        type: types.STRING(64),
        allowNull: false
    },
    JobLevel: {
        type: types.TINYINT,
        allowNull: false
    },
    JobData: {
        type: types.INTEGER,
        allowNull: false
    },
    IsNewEntry: {
        type: types.TINYINT,
        allowNull: false
    },
    RankDelta: {
        type: types.SMALLINT,
        allowNull: false
    },
    Country: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '__TrijobRanking__',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX___TrijobRanking__",
            fields: [
                { name: "NickName" },
            ]
        },
        {
            name: "PK___TrijobRanking__",
            unique: true,
            fields: [
                { name: "ShardID" },
                { name: "TrijobType" },
                { name: "RankType" },
                { name: "Rank" },
            ]
        },
    ]
});
