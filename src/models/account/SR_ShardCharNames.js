export default (db, types) => db.define('SR_ShardCharNames', {
    UserJID: {
        type: types.INTEGER,
        allowNull: false
    },
    ShardID: {
        type: types.INTEGER,
        allowNull: false
    },
    CharName: {
        type: types.STRING(64),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'SR_ShardCharNames',
    schema: 'dbo',
    timestamps: false
});
