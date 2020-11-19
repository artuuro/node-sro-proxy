export default (db, types) => db.define('_CharTrijobSafeTrade', {
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_CharTrijob',
            key: 'CharID'
        },
        unique: "IX__CharTrijobSafeTrade"
    },
    AbleCount: {
        type: types.INTEGER,
        allowNull: false
    },
    Status: {
        type: types.INTEGER,
        allowNull: false
    },
    LastSafeTrade: {
        type: types.DATE,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_CharTrijobSafeTrade',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__CharTrijobSafeTrade",
            unique: true,
            fields: [
                { name: "CharID" },
            ]
        },
    ]
});
