import { fn } from 'sequelize';
export default (db, types) => db.define('_SMCLog', {
    szUserID: {
        type: types.STRING(128),
        allowNull: false
    },
    Catagory: {
        type: types.TINYINT,
        allowNull: false
    },
    szLog: {
        type: types.STRING(256),
        allowNull: false
    },
    dLogDate: {
        type: types.DATE,
        allowNull: false,
        defaultValue: fn('getdate')
    }
}, {
    sequelize: db,
    tableName: '_SMCLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX_SMCLog",
            fields: [
                { name: "dLogDate" },
            ]
        },
    ]
});
