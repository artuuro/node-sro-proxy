export default (db, types) => db.define('Tab_RefRanking_RobberContribution', {
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
    Contribution: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'Tab_RefRanking_RobberContribution',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK_Tab_RefRanking_RobberContribution",
            unique: true,
            fields: [
                { name: "Rank" },
            ]
        },
    ]
});
