export default (db, types) => db.define('__SiegeFortressStatus__', {
    ShardID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    FortressName: {
        type: types.STRING(129),
        allowNull: false,
        primaryKey: true
    },
    FortressScale: {
        type: types.TINYINT,
        allowNull: false
    },
    TaxRatio: {
        type: types.SMALLINT,
        allowNull: false
    },
    OwnerGuildName: {
        type: types.STRING(129),
        allowNull: true
    },
    OwnerGuildMaster: {
        type: types.STRING(129),
        allowNull: true
    },
    OwnerAllianceGuildName1: {
        type: types.STRING(129),
        allowNull: true
    },
    OwnerAllianceGuildName2: {
        type: types.STRING(129),
        allowNull: true
    },
    OwnerAllianceGuildName3: {
        type: types.STRING(129),
        allowNull: true
    },
    OwnerAllianceGuildName4: {
        type: types.STRING(129),
        allowNull: true
    },
    OwnerAllianceGuildName5: {
        type: types.STRING(129),
        allowNull: true
    },
    OwnerAllianceGuildName6: {
        type: types.STRING(129),
        allowNull: true
    },
    OwnerAllianceGuildName7: {
        type: types.STRING(129),
        allowNull: true
    },
    OwnerAllianceGuildName8: {
        type: types.STRING(129),
        allowNull: true
    },
    OwnerUpdateDate: {
        type: types.DATE,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '__SiegeFortressStatus__',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK___SiegeFortressStatus__",
            unique: true,
            fields: [
                { name: "ShardID" },
                { name: "FortressName" },
            ]
        },
    ]
});
