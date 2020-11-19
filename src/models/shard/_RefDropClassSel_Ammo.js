export default (db, types) => db.define('_RefDropClassSel_Ammo', {
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
    }
}, {
    sequelize: db,
    tableName: '_RefDropClassSel_Ammo',
    schema: 'dbo',
    timestamps: false
});
