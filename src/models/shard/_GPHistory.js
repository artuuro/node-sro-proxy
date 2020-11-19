import { fn } from 'sequelize';
export default (db, types) => db.define('_GPHistory', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    GuildID: {
        type: types.INTEGER,
        allowNull: false
    },
    UsedTime: {
        type: types.DATE,
        allowNull: true,
        defaultValue: fn('getdate')
    },
    CharName: {
        type: types.STRING(64),
        allowNull: false
    },
    UsedGP: {
        type: types.INTEGER,
        allowNull: false
    },
    Reason: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_GPHistory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX_GPHistory_GuildID",
            fields: [
                { name: "GuildID" },
            ]
        },
        {
            name: "IX_GPHistory_UsedTime",
            fields: [
                { name: "UsedTime" },
            ]
        },
        {
            name: "PK___GPHistory__2A54081B",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
