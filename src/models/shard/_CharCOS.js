export default (db, types) => db.define('_CharCOS', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    OwnerCharID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_Char',
            key: 'CharID'
        }
    },
    RefCharID: {
        type: types.INTEGER,
        allowNull: false
    },
    HP: {
        type: types.INTEGER,
        allowNull: false
    },
    MP: {
        type: types.INTEGER,
        allowNull: false
    },
    KeeperNPC: {
        type: types.INTEGER,
        allowNull: false
    },
    State: {
        type: types.TINYINT,
        allowNull: false
    },
    CharName: {
        type: types.STRING(16),
        allowNull: true
    },
    Lvl: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    ExpOffset: {
        type: types.BIGINT,
        allowNull: false,
        defaultValue: 0
    },
    HGP: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 0
    },
    PetOption: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    RentEndTime: {
        type: "SMALLDATETIME",
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_CharCOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__CharCOS",
            fields: [
                { name: "OwnerCharID" },
            ]
        },
        {
            name: "IX__CharCOS_1",
            fields: [
                { name: "CharName" },
            ]
        },
        {
            name: "PK__CharCOS",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
