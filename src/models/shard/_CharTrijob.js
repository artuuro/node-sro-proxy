export default (db, types) => db.define('_CharTrijob', {
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: '_Char',
            key: 'CharID'
        }
    },
    JobType: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    Level: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 1
    },
    Exp: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Contribution: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Reward: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: '_CharTrijob',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__CharTrijob",
            unique: true,
            fields: [
                { name: "CharID" },
            ]
        },
    ]
});
