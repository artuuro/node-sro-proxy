export default (db, types) => db.define('_RefDropClassSel_Recover', {
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
    },
    ProbGroup4: {
        type: types.REAL,
        allowNull: false
    },
    ProbGroup5: {
        type: types.REAL,
        allowNull: false
    },
    ProbGroup6: {
        type: types.REAL,
        allowNull: false
    },
    ProbGroup7: {
        type: types.REAL,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefDropClassSel_Recover',
    schema: 'dbo',
    timestamps: false
});
