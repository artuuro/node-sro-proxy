export default (db, types) => db.define('_GuildMember', {
    GuildID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: '_Guild',
            key: 'ID'
        }
    },
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: '_Char',
            key: 'CharID'
        }
    },
    CharName: {
        type: types.STRING(64),
        allowNull: false
    },
    MemberClass: {
        type: types.TINYINT,
        allowNull: false
    },
    CharLevel: {
        type: types.TINYINT,
        allowNull: false
    },
    GP_Donation: {
        type: types.INTEGER,
        allowNull: false
    },
    JoinDate: {
        type: "SMALLDATETIME",
        allowNull: false
    },
    Permission: {
        type: types.INTEGER,
        allowNull: true
    },
    Contribution: {
        type: types.INTEGER,
        allowNull: true
    },
    GuildWarKill: {
        type: types.INTEGER,
        allowNull: true
    },
    GuildWarKilled: {
        type: types.INTEGER,
        allowNull: true
    },
    Nickname: {
        type: types.STRING(64),
        allowNull: true
    },
    RefObjID: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    SiegeAuthority: {
        type: types.TINYINT,
        allowNull: true,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_GuildMember',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX_CharID_GuildMember",
            fields: [
                { name: "CharID" },
            ]
        },
        {
            name: "PK__GuildMember",
            unique: true,
            fields: [
                { name: "GuildID" },
                { name: "CharID" },
            ]
        },
    ]
});
