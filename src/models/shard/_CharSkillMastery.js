export default (db, types) => db.define('_CharSkillMastery', {
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: '_Char',
            key: 'CharID'
        }
    },
    MasteryID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Level: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_CharSkillMastery',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__CharSkillMastery",
            unique: true,
            fields: [
                { name: "CharID" },
                { name: "MasteryID" },
            ]
        },
    ]
});
