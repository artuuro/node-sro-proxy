export default (db, types) => db.define('Tab_RefRanking_RobberActivity', {
    Rank: {
        type: types.TINYINT,
        allowNull: false,
        primaryKey: true
    },
    NickName: {
        type: types.STRING(17),
        allowNull: false
    },
    JobLevel: {
        type: types.TINYINT,
        allowNull: false
    },
    JobExp: {
        type: types.INTEGER,
        allowNull: false
    },
    Country: {
        type: types.SMALLINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'Tab_RefRanking_RobberActivity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK_Tab_RefRanking_RobberActivity",
            unique: true,
            fields: [
                { name: "Rank" },
            ]
        },
    ]
});
