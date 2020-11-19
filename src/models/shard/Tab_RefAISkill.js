export default (db, types) => db.define('Tab_RefAISkill', {
    TacticsID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SkillCodeName: {
        type: DataTypes.STRING(129),
        allowNull: false
    },
    ExcuteConditionType: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    ExcuteConditionData: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    Option: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'Tab_RefAISkill',
    schema: 'dbo',
    timestamps: false
});
