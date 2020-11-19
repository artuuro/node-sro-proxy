export default (db, types) => db.define('_RefDropItemAssign', {
    Service: {
        type: types.INTEGER,
        allowNull: false
    },
    RefItemID: {
        type: types.INTEGER,
        allowNull: false
    },
    Prob_Relative: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Prob_Absolute: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    AssignedGroup: {
        type: types.INTEGER,
        allowNull: false
    },
    DropCount: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefDropItemAssign',
    schema: 'dbo',
    timestamps: false
});
