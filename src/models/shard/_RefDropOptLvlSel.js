export default (db, types) => db.define('_RefDropOptLvlSel', {
    OptLevel: {
        type: types.TINYINT,
        allowNull: false
    },
    Prob: {
        type: types.REAL,
        allowNull: false
    },
    ReqOnlineTime: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefDropOptLvlSel',
    schema: 'dbo',
    timestamps: false
});
