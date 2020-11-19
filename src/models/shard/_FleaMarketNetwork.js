export default (db, types) => db.define('_FleaMarketNetwork', {
    AbleOpen: {
        type: types.TINYINT,
        allowNull: false
    },
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_Char',
            key: 'CharID'
        }
    },
    Slot: {
        type: types.TINYINT,
        allowNull: false
    },
    TidGroupID: {
        type: types.INTEGER,
        allowNull: false
    },
    ItemClass: {
        type: types.TINYINT,
        allowNull: false
    },
    ItemCount: {
        type: types.INTEGER,
        allowNull: false
    },
    MakeZone: {
        type: types.TINYINT,
        allowNull: false
    },
    Cash: {
        type: types.BIGINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_FleaMarketNetwork',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "CIX__FleaMarketNetwork",
            fields: [
                { name: "CharID" },
                { name: "Slot" },
            ]
        },
    ]
});
