export default (db, types) => db.define('_OldTrijob', {
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    JobLvl_Trader: {
        type: types.TINYINT,
        allowNull: false
    },
    Trader_Exp: {
        type: types.INTEGER,
        allowNull: false
    },
    JobLvl_Robber: {
        type: types.TINYINT,
        allowNull: false
    },
    Robber_Exp: {
        type: types.INTEGER,
        allowNull: false
    },
    JobLvl_Hunter: {
        type: types.TINYINT,
        allowNull: false
    },
    Hunter_Exp: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_OldTrijob',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__OldTrijob",
            unique: true,
            fields: [
                { name: "CharID" },
            ]
        },
    ]
});
