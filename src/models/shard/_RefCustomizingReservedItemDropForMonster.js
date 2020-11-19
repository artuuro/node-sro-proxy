export default (db, types) => db.define('_RefCustomizingReservedItemDropForMonster', {
    RefMonsterID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_RefObjCommon',
            key: 'ID'
        }
    },
    Rarity: {
        type: types.TINYINT,
        allowNull: false
    },
    Command: {
        type: types.INTEGER,
        allowNull: false
    },
    DropGroupType: {
        type: types.TINYINT,
        allowNull: false
    },
    Param1: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    Param2: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    Param3: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    Param4: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    Param5: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_RefCustomizingReservedItemDropForMonster',
    schema: 'dbo',
    timestamps: false
});
