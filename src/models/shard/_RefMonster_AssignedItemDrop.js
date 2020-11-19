export default (db, types) => db.define('_RefMonster_AssignedItemDrop', {
    RefMonsterID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_RefObjCommon',
            key: 'ID'
        }
    },
    RefItemID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_RefObjCommon',
            key: 'ID'
        }
    },
    DropGroupType: {
        type: types.TINYINT,
        allowNull: false
    },
    OptLevel: {
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
    RefMagicOptionID1: {
        type: types.SMALLINT,
        allowNull: true,
        defaultValue: 0
    },
    CustomValue1: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    RefMagicOptionID2: {
        type: types.SMALLINT,
        allowNull: true,
        defaultValue: 0
    },
    CustomValue2: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    RefMagicOptionID3: {
        type: types.SMALLINT,
        allowNull: true,
        defaultValue: 0
    },
    CustomValue3: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    RefMagicOptionID4: {
        type: types.SMALLINT,
        allowNull: true,
        defaultValue: 0
    },
    CustomValue4: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    RefMagicOptionID5: {
        type: types.SMALLINT,
        allowNull: true,
        defaultValue: 0
    },
    CustomValue5: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    RefMagicOptionID6: {
        type: types.SMALLINT,
        allowNull: true,
        defaultValue: 0
    },
    CustomValue6: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    RefMagicOptionID7: {
        type: types.SMALLINT,
        allowNull: true,
        defaultValue: 0
    },
    CustomValue7: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    RefMagicOptionID8: {
        type: types.SMALLINT,
        allowNull: true,
        defaultValue: 0
    },
    CustomValue8: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    RefMagicOptionID9: {
        type: types.SMALLINT,
        allowNull: true,
        defaultValue: 0
    },
    CustomValue9: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    RentCodeName: {
        type: types.STRING(129),
        allowNull: false,
        defaultValue: "xxx"
    }
}, {
    sequelize: db,
    tableName: '_RefMonster_AssignedItemDrop',
    schema: 'dbo',
    timestamps: false
});
