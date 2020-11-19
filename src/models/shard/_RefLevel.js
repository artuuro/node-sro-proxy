export default (db, types) => db.define('_RefLevel', {
    Lvl: {
        type: types.TINYINT,
        allowNull: false,
        primaryKey: true
    },
    Exp_C: {
        type: types.BIGINT,
        allowNull: false
    },
    Exp_M: {
        type: types.INTEGER,
        allowNull: false
    },
    Cost_M: {
        type: types.INTEGER,
        allowNull: false
    },
    Cost_ST: {
        type: types.INTEGER,
        allowNull: false
    },
    GUST_Mob_Exp: {
        type: types.INTEGER,
        allowNull: false
    },
    JobExp_Trader: {
        type: types.INTEGER,
        allowNull: true
    },
    JobExp_Robber: {
        type: types.INTEGER,
        allowNull: true
    },
    JobExp_Hunter: {
        type: types.INTEGER,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_RefLevel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefLevel",
            unique: true,
            fields: [
                { name: "Lvl" },
            ]
        },
    ]
});
