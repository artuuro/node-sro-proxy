export default (db, types) => db.define('_RefObjCommon', {
    Service: {
        type: types.INTEGER,
        allowNull: false
    },
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    CodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    ObjName128: {
        type: types.STRING(129),
        allowNull: false
    },
    OrgObjCodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    NameStrID128: {
        type: types.STRING(129),
        allowNull: false
    },
    DescStrID128: {
        type: types.STRING(129),
        allowNull: false
    },
    CashItem: {
        type: types.TINYINT,
        allowNull: false
    },
    Bionic: {
        type: types.TINYINT,
        allowNull: false
    },
    TypeID1: {
        type: types.TINYINT,
        allowNull: false
    },
    TypeID2: {
        type: types.TINYINT,
        allowNull: false
    },
    TypeID3: {
        type: types.TINYINT,
        allowNull: false
    },
    TypeID4: {
        type: types.TINYINT,
        allowNull: false
    },
    DecayTime: {
        type: types.INTEGER,
        allowNull: false
    },
    Country: {
        type: types.TINYINT,
        allowNull: false
    },
    Rarity: {
        type: types.TINYINT,
        allowNull: false
    },
    CanTrade: {
        type: types.TINYINT,
        allowNull: false
    },
    CanSell: {
        type: types.TINYINT,
        allowNull: false
    },
    CanBuy: {
        type: types.TINYINT,
        allowNull: false
    },
    CanBorrow: {
        type: types.TINYINT,
        allowNull: false
    },
    CanDrop: {
        type: types.TINYINT,
        allowNull: false
    },
    CanPick: {
        type: types.TINYINT,
        allowNull: false
    },
    CanRepair: {
        type: types.TINYINT,
        allowNull: false
    },
    CanRevive: {
        type: types.TINYINT,
        allowNull: false
    },
    CanUse: {
        type: types.TINYINT,
        allowNull: false
    },
    CanThrow: {
        type: types.TINYINT,
        allowNull: false
    },
    Price: {
        type: types.INTEGER,
        allowNull: false
    },
    CostRepair: {
        type: types.INTEGER,
        allowNull: false
    },
    CostRevive: {
        type: types.INTEGER,
        allowNull: false
    },
    CostBorrow: {
        type: types.INTEGER,
        allowNull: false
    },
    KeepingFee: {
        type: types.INTEGER,
        allowNull: false
    },
    SellPrice: {
        type: types.INTEGER,
        allowNull: false
    },
    ReqLevelType1: {
        type: types.INTEGER,
        allowNull: false
    },
    ReqLevel1: {
        type: types.TINYINT,
        allowNull: false
    },
    ReqLevelType2: {
        type: types.INTEGER,
        allowNull: false
    },
    ReqLevel2: {
        type: types.TINYINT,
        allowNull: false
    },
    ReqLevelType3: {
        type: types.INTEGER,
        allowNull: false
    },
    ReqLevel3: {
        type: types.TINYINT,
        allowNull: false
    },
    ReqLevelType4: {
        type: types.INTEGER,
        allowNull: false
    },
    ReqLevel4: {
        type: types.TINYINT,
        allowNull: false
    },
    MaxContain: {
        type: types.INTEGER,
        allowNull: false
    },
    RegionID: {
        type: types.SMALLINT,
        allowNull: false
    },
    Dir: {
        type: types.SMALLINT,
        allowNull: false
    },
    OffsetX: {
        type: types.SMALLINT,
        allowNull: false
    },
    OffsetY: {
        type: types.SMALLINT,
        allowNull: false
    },
    OffsetZ: {
        type: types.SMALLINT,
        allowNull: false
    },
    Speed1: {
        type: types.SMALLINT,
        allowNull: false
    },
    Speed2: {
        type: types.SMALLINT,
        allowNull: false
    },
    Scale: {
        type: types.INTEGER,
        allowNull: false
    },
    BCHeight: {
        type: types.SMALLINT,
        allowNull: false
    },
    BCRadius: {
        type: types.SMALLINT,
        allowNull: false
    },
    EventID: {
        type: types.INTEGER,
        allowNull: false
    },
    AssocFileObj128: {
        type: types.STRING(129),
        allowNull: false
    },
    AssocFileDrop128: {
        type: types.STRING(129),
        allowNull: false
    },
    AssocFileIcon128: {
        type: types.STRING(129),
        allowNull: false
    },
    AssocFile1_128: {
        type: types.STRING(129),
        allowNull: false
    },
    AssocFile2_128: {
        type: types.STRING(129),
        allowNull: false
    },
    Link: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefObjCommon',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX_RefObjCommon_CodeName",
            fields: [
                { name: "CodeName128" },
            ]
        },
        {
            name: "PK__RefObjCommon",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
