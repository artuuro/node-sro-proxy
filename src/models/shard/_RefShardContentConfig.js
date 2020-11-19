export default (db, types) => db.define('_RefShardContentConfig', {
    Service: {
        type: types.INTEGER,
        allowNull: false
    },
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    CodeName128: {
        type: types.STRING(129),
        allowNull: false,
        unique: "IX__RefShardContentService"
    },
    CodeDesc128: {
        type: types.STRING(129),
        allowNull: false
    },
    Value: {
        type: types.STRING(129),
        allowNull: false
    },
    Type: {
        type: types.STRING(20),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_RefShardContentConfig',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefShardContentService",
            unique: true,
            fields: [
                { name: "CodeName128" },
            ]
        },
    ]
});
