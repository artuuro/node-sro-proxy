export default (db, types) => db.define('_ShardService', {
    ShardID: {
        type: types.SMALLINT,
        allowNull: false
    },
    ServiceType: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_ShardService',
    schema: 'dbo',
    timestamps: false
});
