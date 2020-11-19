export default (db, types) => db.define('_BlockedWhisperers', {
    OwnerID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_Char',
            key: 'CharID'
        }
    },
    TargetName: {
        type: types.STRING(64),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_BlockedWhisperers',
    schema: 'dbo',
    timestamps: false
});
