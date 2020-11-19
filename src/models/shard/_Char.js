export default (db, types) => db.define('_Char', {
    CharID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Deleted: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    RefObjID: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    CharName16: {
        type: types.STRING(64),
        allowNull: false,
        unique: "IX__Char"
    },
    NickName16: {
        type: types.STRING(17),
        allowNull: false,
        defaultValue: ""
    },
    Scale: {
        type: types.TINYINT,
        allowNull: false
    },
    CurLevel: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    MaxLevel: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    ExpOffset: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    SExpOffset: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Strength: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 0
    },
    Intellect: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 0
    },
    RemainGold: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    RemainSkillPoint: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    RemainStatPoint: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 0
    },
    RemainHwanCount: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    GatheredExpPoint: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    HP: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 200
    },
    MP: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 200
    },
    LatestRegion: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 0
    },
    PosX: {
        type: types.REAL,
        allowNull: false
    },
    PosY: {
        type: types.REAL,
        allowNull: false
    },
    PosZ: {
        type: types.REAL,
        allowNull: false
    },
    AppointedTeleport: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    AutoInvestExp: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    InventorySize: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    DailyPK: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    TotalPK: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 0
    },
    PKPenaltyPoint: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    TPP: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    PenaltyForfeit: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    JobPenaltyTime: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    JobLvl_Trader: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    Trader_Exp: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    JobLvl_Hunter: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    Hunter_Exp: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    JobLvl_Robber: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    Robber_Exp: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    GuildID: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    LastLogout: {
        type: "SMALLDATETIME",
        allowNull: false
    },
    TelRegion: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 0
    },
    TelPosX: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    TelPosY: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    TelPosZ: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    DiedRegion: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 0
    },
    DiedPosX: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    DiedPosY: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    DiedPosZ: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0
    },
    WorldID: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 1
    },
    TelWorldID: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 1
    },
    DiedWorldID: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 1
    },
    HwanLevel: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_Char',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__Char",
            unique: true,
            fields: [
                { name: "CharName16" },
            ]
        },
        {
            name: "IX__Char_1",
            fields: [
                { name: "NickName16" },
            ]
        },
        {
            name: "PK__Char_1",
            unique: true,
            fields: [
                { name: "CharID" },
            ]
        },
    ]
});
