export default (db, types) => db.define('_ChestInfo', {
    JID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_AccountJID',
            key: 'JID'
        }
    },
    ChestSize: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 150
    }
}, {
    sequelize: db,
    tableName: '_ChestInfo',
    schema: 'dbo',
    timestamps: false
});
