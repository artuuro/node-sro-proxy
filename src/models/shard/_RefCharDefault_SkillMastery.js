export default (db, types) => db.define('_RefCharDefault_SkillMastery', {
    Race: {
        type: types.TINYINT,
        allowNull: false
    },
    MasteryID: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefCharDefault_SkillMastery',
    schema: 'dbo',
    timestamps: false
});
