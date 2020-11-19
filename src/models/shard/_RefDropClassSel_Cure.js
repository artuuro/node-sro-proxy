export default (db, types) => db.define('_RefDropClassSel_Cure', {
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
        allowNull: false,
        defaultValue: 0.0
    },
    ProbGroup8: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0.0
    },
    ProbGroup9: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0.0
    },
    ProbGroup10: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0.0
    },
    ProbGroup11: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0.0
    },
    ProbGroup12: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0.0
    },
    ProbGroup13: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0.0
    },
    ProbGroup14: {
        type: types.REAL,
        allowNull: false,
        defaultValue: 0.0
    }
}, {
    sequelize: db,
    tableName: '_RefDropClassSel_Cure',
    schema: 'dbo',
    timestamps: false
});
