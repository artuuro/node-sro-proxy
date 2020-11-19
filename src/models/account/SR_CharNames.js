export default (db, types) => db.define('SR_CharNames', {
    UserJID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    ShardID: {
        type: types.SMALLINT,
        allowNull: false,
        primaryKey: true
    },
    CharID_1: {
        type: types.STRING(17),
        allowNull: false
    },
    CharID_2: {
        type: types.STRING(17),
        allowNull: true
    },
    CharID_3: {
        type: types.STRING(17),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'SR_CharNames',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK_SR_CharNames",
            unique: true,
            fields: [
                { name: "UserJID" },
                { name: "ShardID" },
            ]
        },
    ]
});
