import { fn } from 'sequelize';
export default (db, types) => db.define('QuaySoEpoint', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    UserCash: {
        type: types.STRING(20),
        allowNull: true
    },
    Server: {
        type: types.INTEGER,
        allowNull: true
    },
    CharID: {
        type: types.INTEGER,
        allowNull: true
    },
    CharName: {
        type: types.STRING(20),
        allowNull: true
    },
    SP_Own: {
        type: types.INTEGER,
        allowNull: true
    },
    SP_Before: {
        type: types.INTEGER,
        allowNull: true
    },
    SP_After: {
        type: types.INTEGER,
        allowNull: true
    },
    Regdate: {
        type: types.DATE,
        allowNull: true,
        defaultValue: fn('getdate')
    },
    SourcePoint: {
        type: types.CHAR(2),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'QuaySoEpoint',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK_QuaySoEpoint",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
