export default (db, types) => db.define('__TrijobRankingStatus__', {
    ShardID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Status: {
        type: types.TINYINT,
        allowNull: false
    },
    UpdateTime: {
        type: "SMALLDATETIME",
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '__TrijobRankingStatus__',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK___TrijobRankingStatus__",
            unique: true,
            fields: [
                { name: "ShardID" },
            ]
        },
    ]
});
