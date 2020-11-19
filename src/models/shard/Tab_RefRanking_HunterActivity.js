export default (db, types) => db.define('Tab_RefRanking_HunterActivity', {
    Rank: {
        type: DataTypes.TINYINT,
        allowNull: false,
        primaryKey: true
    },
    NickName: {
        type: DataTypes.STRING(17),
        allowNull: false
    },
    JobLevel: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    JobExp: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Country: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'Tab_RefRanking_HunterActivity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK_Tab_RefRanking_HunterActivity",
            unique: true,
            fields: [
                { name: "Rank" },
            ]
        },
    ]
});
