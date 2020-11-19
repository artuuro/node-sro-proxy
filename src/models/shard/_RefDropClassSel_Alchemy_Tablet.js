export default (db, types) => db.define('_RefDropClassSel_Alchemy_Tablet', {
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
    },
    ProbGroup8: {
        type: types.REAL,
        allowNull: false
    },
    ProbGroup9: {
        type: types.REAL,
        allowNull: false
    },
    ProbGroup10: {
        type: types.REAL,
        allowNull: false
    },
    ProbGroup11: {
        type: types.REAL,
        allowNull: false
    },
    ProbGroup12: {
        type: types.REAL,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefDropClassSel_Alchemy_Tablet',
    schema: 'dbo',
    timestamps: false
});
