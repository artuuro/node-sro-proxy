export default (db, types) => db.define('_RefDropClassSel_Reinforce', {
    MonLevel: {
        type: types.INTEGER,
        allowNull: false
    },
    ProbGroup1: {
        type: types.REAL,
        allowNull: false
    },
    ProbGroup2: {
        type: types.REAL,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefDropClassSel_Reinforce',
    schema: 'dbo',
    timestamps: false
});
