import { fn } from 'sequelize';
export default (db, types) => db.define('SK_PK_UpdateLog', {
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    JID: {
        type: types.INTEGER,
        allowNull: false
    },
    UserName: {
        type: types.STRING(15),
        allowNull: true
    },
    CharID: {
        type: types.INTEGER,
        allowNull: true
    },
    CharName: {
        type: types.STRING(15),
        allowNull: true
    },
    PackageItemID: {
        type: types.INTEGER,
        allowNull: false
    },
    Silk_Own: {
        type: types.INTEGER,
        allowNull: true
    },
    Silk_Before: {
        type: types.INTEGER,
        allowNull: true
    },
    Silk_After: {
        type: types.INTEGER,
        allowNull: true
    },
    Gold_Remain: {
        type: types.BIGINT,
        allowNull: true
    },
    Gold_Before: {
        type: types.BIGINT,
        allowNull: true
    },
    Gold_After: {
        type: types.BIGINT,
        allowNull: true
    },
    IP: {
        type: types.INTEGER,
        allowNull: false
    },
    RegDate: {
        type: types.DATE,
        allowNull: false,
        defaultValue: fn('getdate')
    },
    Serial64: {
        type: types.BIGINT,
        allowNull: true,
        defaultValue: 0
    },
    ShardID: {
        type: types.INTEGER,
        allowNull: true
    },
    ServiceCode: {
        type: types.STRING(10),
        allowNull: true
    },
    _Strength: {
        type: types.INTEGER,
        allowNull: true
    },
    _Intellect: {
        type: types.INTEGER,
        allowNull: true
    },
    _CurLevel: {
        type: types.INTEGER,
        allowNull: true
    },
    _Statpoint: {
        type: types.INTEGER,
        allowNull: true
    },
    _NewName: {
        type: types.STRING(12),
        allowNull: true
    },
    _OldPetName: {
        type: types.STRING(12),
        allowNull: true
    },
    _NewPetName: {
        type: types.STRING(12),
        allowNull: true
    },
    _NewStatPoint: {
        type: types.INTEGER,
        allowNull: true
    },
    _NewLevel: {
        type: types.INTEGER,
        allowNull: true
    },
    _NewStrength: {
        type: types.INTEGER,
        allowNull: true
    },
    _NewIntellect: {
        type: types.INTEGER,
        allowNull: true
    },
    _Skill_Own: {
        type: types.INTEGER,
        allowNull: true
    },
    _Skill_Before: {
        type: types.INTEGER,
        allowNull: true
    },
    _Skill_After: {
        type: types.INTEGER,
        allowNull: true
    },
    _Item_BH: {
        type: types.STRING(200),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'SK_PK_UpdateLog',
    schema: 'dbo',
    timestamps: false
});
