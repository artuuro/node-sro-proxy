export default (db, types) => db.define('_ClientConfig', {
    CharID: {
        type: types.INTEGER,
        allowNull: false
    },
    ConfigType: {
        type: types.TINYINT,
        allowNull: false
    },
    SlotSeq: {
        type: types.TINYINT,
        allowNull: false
    },
    SlotType: {
        type: types.TINYINT,
        allowNull: false
    },
    Data: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_ClientConfig',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__ClientConfig",
            fields: [
                { name: "CharID" },
            ]
        },
    ]
});
