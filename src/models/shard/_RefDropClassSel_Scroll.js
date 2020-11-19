export default (db, types) => db.define('_RefDropClassSel_Scroll', {
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
    },
    ProbGroup3: {
        type: types.REAL,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefDropClassSel_Scroll',
    schema: 'dbo',
    timestamps: false
});
