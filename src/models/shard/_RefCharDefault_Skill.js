export default (db, types) => db.define('_RefCharDefault_Skill', {
    Race: {
        type: types.TINYINT,
        allowNull: false
    },
    SkillID: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefCharDefault_Skill',
    schema: 'dbo',
    timestamps: false
});
