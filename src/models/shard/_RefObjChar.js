export default (db, types) => db.define('_RefObjChar', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Lvl: {
        type: types.TINYINT,
        allowNull: false
    },
    CharGender: {
        type: types.TINYINT,
        allowNull: false
    },
    MaxHP: {
        type: types.INTEGER,
        allowNull: false
    },
    MaxMP: {
        type: types.INTEGER,
        allowNull: false
    },
    ResistFrozen: {
        type: types.INTEGER,
        allowNull: false
    },
    ResistFrostbite: {
        type: types.INTEGER,
        allowNull: false
    },
    ResistBurn: {
        type: types.INTEGER,
        allowNull: false
    },
    ResistEShock: {
        type: types.INTEGER,
        allowNull: false
    },
    ResistPoison: {
        type: types.INTEGER,
        allowNull: false
    },
    ResistZombie: {
        type: types.INTEGER,
        allowNull: false
    },
    ResistSleep: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistRoot: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistSlow: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistFear: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistMyopia: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistBlood: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistStone: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistDark: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistStun: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistDisea: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistChaos: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistCsePD: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistCseMD: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistCseSTR: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistCseINT: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistCseHP: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistCseMP: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Resist24: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ResistBomb: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Resist26: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Resist27: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Resist28: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Resist29: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Resist30: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Resist31: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Resist32: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    InventorySize: {
        type: types.TINYINT,
        allowNull: false
    },
    CanStore_TID1: {
        type: types.TINYINT,
        allowNull: false
    },
    CanStore_TID2: {
        type: types.TINYINT,
        allowNull: false
    },
    CanStore_TID3: {
        type: types.TINYINT,
        allowNull: false
    },
    CanStore_TID4: {
        type: types.TINYINT,
        allowNull: false
    },
    CanBeVehicle: {
        type: types.TINYINT,
        allowNull: false
    },
    CanControl: {
        type: types.TINYINT,
        allowNull: false
    },
    DamagePortion: {
        type: types.TINYINT,
        allowNull: false
    },
    MaxPassenger: {
        type: types.SMALLINT,
        allowNull: false
    },
    AssocTactics: {
        type: types.INTEGER,
        allowNull: false
    },
    PD: {
        type: types.INTEGER,
        allowNull: false
    },
    MD: {
        type: types.INTEGER,
        allowNull: false
    },
    PAR: {
        type: types.INTEGER,
        allowNull: false
    },
    MAR: {
        type: types.INTEGER,
        allowNull: false
    },
    ER: {
        type: types.INTEGER,
        allowNull: false
    },
    BR: {
        type: types.INTEGER,
        allowNull: false
    },
    HR: {
        type: types.INTEGER,
        allowNull: false
    },
    CHR: {
        type: types.INTEGER,
        allowNull: false
    },
    ExpToGive: {
        type: types.INTEGER,
        allowNull: false
    },
    CreepType: {
        type: types.INTEGER,
        allowNull: false
    },
    Knockdown: {
        type: types.TINYINT,
        allowNull: false
    },
    KO_RecoverTime: {
        type: types.INTEGER,
        allowNull: false
    },
    DefaultSkill_1: {
        type: types.INTEGER,
        allowNull: true
    },
    DefaultSkill_2: {
        type: types.INTEGER,
        allowNull: true
    },
    DefaultSkill_3: {
        type: types.INTEGER,
        allowNull: true
    },
    DefaultSkill_4: {
        type: types.INTEGER,
        allowNull: true
    },
    DefaultSkill_5: {
        type: types.INTEGER,
        allowNull: true
    },
    DefaultSkill_6: {
        type: types.INTEGER,
        allowNull: true
    },
    DefaultSkill_7: {
        type: types.INTEGER,
        allowNull: true
    },
    DefaultSkill_8: {
        type: types.INTEGER,
        allowNull: true
    },
    DefaultSkill_9: {
        type: types.INTEGER,
        allowNull: true
    },
    DefaultSkill_10: {
        type: types.INTEGER,
        allowNull: true
    },
    TextureType: {
        type: types.TINYINT,
        allowNull: true
    },
    Except_1: {
        type: types.INTEGER,
        allowNull: true
    },
    Except_2: {
        type: types.INTEGER,
        allowNull: true
    },
    Except_3: {
        type: types.INTEGER,
        allowNull: true
    },
    Except_4: {
        type: types.INTEGER,
        allowNull: true
    },
    Except_5: {
        type: types.INTEGER,
        allowNull: true
    },
    Except_6: {
        type: types.INTEGER,
        allowNull: true
    },
    Except_7: {
        type: types.INTEGER,
        allowNull: true
    },
    Except_8: {
        type: types.INTEGER,
        allowNull: true
    },
    Except_9: {
        type: types.INTEGER,
        allowNull: true
    },
    Except_10: {
        type: types.INTEGER,
        allowNull: true
    },
    Link: {
        type: types.INTEGER,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_RefObjChar',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__Char",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
