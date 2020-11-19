export default (db, types) => db.define('_RefMonster_AssignedItemRndDrop', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    RefMonsterID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_RefObjCommon',
            key: 'ID'
        },
        unique: "IX__RefMonster_AssignedItemRndDrop"
    },
    RefItemGroupID: {
        type: types.INTEGER,
        allowNull: false,
        unique: "IX__RefMonster_AssignedItemRndDrop"
    },
    ItemGroupCodeName128: {
        type: types.STRING(128),
        allowNull: false
    },
    Overlap: {
        type: types.TINYINT,
        allowNull: false
    },
    DropAmountMin: {
        type: types.TINYINT,
        allowNull: false
    },
    DropAmountMax: {
        type: types.TINYINT,
        allowNull: false
    },
    DropRatio: {
        type: types.REAL,
        allowNull: false
    },
    param1: {
        type: types.INTEGER,
        allowNull: false
    },
    param2: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefMonster_AssignedItemRndDrop',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefMonster_AssignedItemRndDrop",
            unique: true,
            fields: [
                { name: "RefMonsterID" },
                { name: "RefItemGroupID" },
            ]
        },
    ]
});
