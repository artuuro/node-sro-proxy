export default (db, types) => db.define('_ItemPoolAutoEquipment', {
    Service: {
        type: types.INTEGER,
        allowNull: false
    },
    ID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    CodeName128: {
        type: types.STRING(129),
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
    Country: {
        type: types.TINYINT,
        allowNull: false
    },
    Rarity: {
        type: types.TINYINT,
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
    }
}, {
    sequelize: db,
    tableName: '_ItemPoolAutoEquipment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__ItemPoolAutoEquipment",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
