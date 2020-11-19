export default (db, types) => db.define('_RefItemNames', {
    CodeName128: {
        type: types.STRING,
        allowNull: false
    },
    RealName: {
        type: types.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefItemNames',
    schema: 'dbo',
    timestamps: false
});
