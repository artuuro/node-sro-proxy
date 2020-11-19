export default (db, types) => db.define('_RefObjItem', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    MaxStack: {
        type: types.INTEGER,
        allowNull: false
    },
    ReqGender: {
        type: types.TINYINT,
        allowNull: false
    },
    ReqStr: {
        type: types.INTEGER,
        allowNull: false
    },
    ReqInt: {
        type: types.INTEGER,
        allowNull: false
    },
    ItemClass: {
        type: types.TINYINT,
        allowNull: false
    },
    SetID: {
        type: types.INTEGER,
        allowNull: false
    },
    Dur_L: {
        type: types.REAL,
        allowNull: false
    },
    Dur_U: {
        type: types.REAL,
        allowNull: false
    },
    PD_L: {
        type: types.REAL,
        allowNull: false
    },
    PD_U: {
        type: types.REAL,
        allowNull: false
    },
    PDInc: {
        type: types.REAL,
        allowNull: false
    },
    ER_L: {
        type: types.REAL,
        allowNull: false
    },
    ER_U: {
        type: types.REAL,
        allowNull: false
    },
    ERInc: {
        type: types.REAL,
        allowNull: false
    },
    PAR_L: {
        type: types.REAL,
        allowNull: false
    },
    PAR_U: {
        type: types.REAL,
        allowNull: false
    },
    PARInc: {
        type: types.REAL,
        allowNull: false
    },
    BR_L: {
        type: types.REAL,
        allowNull: false
    },
    BR_U: {
        type: types.REAL,
        allowNull: false
    },
    MD_L: {
        type: types.REAL,
        allowNull: false
    },
    MD_U: {
        type: types.REAL,
        allowNull: false
    },
    MDInc: {
        type: types.REAL,
        allowNull: false
    },
    MAR_L: {
        type: types.REAL,
        allowNull: false
    },
    MAR_U: {
        type: types.REAL,
        allowNull: false
    },
    MARInc: {
        type: types.REAL,
        allowNull: false
    },
    PDStr_L: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    PDStr_U: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    MDInt_L: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    MDInt_U: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    Quivered: {
        type: types.TINYINT,
        allowNull: false
    },
    Ammo1_TID4: {
        type: types.TINYINT,
        allowNull: false
    },
    Ammo2_TID4: {
        type: types.TINYINT,
        allowNull: false
    },
    Ammo3_TID4: {
        type: types.TINYINT,
        allowNull: false
    },
    Ammo4_TID4: {
        type: types.TINYINT,
        allowNull: false
    },
    Ammo5_TID4: {
        type: types.TINYINT,
        allowNull: false
    },
    SpeedClass: {
        type: types.TINYINT,
        allowNull: false
    },
    TwoHanded: {
        type: types.TINYINT,
        allowNull: false
    },
    Range: {
        type: types.SMALLINT,
        allowNull: false
    },
    PAttackMin_L: {
        type: types.REAL,
        allowNull: false
    },
    PAttackMin_U: {
        type: types.REAL,
        allowNull: false
    },
    PAttackMax_L: {
        type: types.REAL,
        allowNull: false
    },
    PAttackMax_U: {
        type: types.REAL,
        allowNull: false
    },
    PAttackInc: {
        type: types.REAL,
        allowNull: false
    },
    MAttackMin_L: {
        type: types.REAL,
        allowNull: false
    },
    MAttackMin_U: {
        type: types.REAL,
        allowNull: false
    },
    MAttackMax_L: {
        type: types.REAL,
        allowNull: false
    },
    MAttackMax_U: {
        type: types.REAL,
        allowNull: false
    },
    MAttackInc: {
        type: types.REAL,
        allowNull: false
    },
    PAStrMin_L: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    PAStrMin_U: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    PAStrMax_L: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    PAStrMax_U: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    MAInt_Min_L: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    MAInt_Min_U: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    MAInt_Max_L: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    MAInt_Max_U: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    HR_L: {
        type: types.REAL,
        allowNull: false
    },
    HR_U: {
        type: types.REAL,
        allowNull: false
    },
    HRInc: {
        type: types.REAL,
        allowNull: false
    },
    CHR_L: {
        type: types.REAL,
        allowNull: false
    },
    CHR_U: {
        type: types.REAL,
        allowNull: false
    },
    Param1: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc1_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param2: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc2_128: {
        type: types.CHAR(129),
        allowNull: false
    },
    Param3: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc3_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param4: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc4_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param5: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc5_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param6: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc6_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param7: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc7_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param8: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc8_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param9: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc9_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param10: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc10_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param11: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc11_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param12: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc12_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param13: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc13_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param14: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc14_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param15: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc15_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param16: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc16_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param17: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc17_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param18: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc18_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param19: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc19_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param20: {
        type: types.INTEGER,
        allowNull: false
    },
    Desc20_128: {
        type: types.STRING(129),
        allowNull: false
    },
    MaxMagicOptCount: {
        type: types.TINYINT,
        allowNull: false
    },
    ChildItemCount: {
        type: types.TINYINT,
        allowNull: false
    },
    Link: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefObjItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefObjItem",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
