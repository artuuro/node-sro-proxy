export default (db, types) => db.define('Tab_RefRanking_TraderContribution', {
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
    tableName: 'Tab_RefRanking_TraderContribution',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK_Tab_RefRanking_TraderContribution",
            unique: true,
            fields: [
                { name: "Rank" },
            ]
        },
    ]
});
