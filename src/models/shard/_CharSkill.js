export default (db, types) => db.define('_CharSkill', {
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: '_Char',
            key: 'CharID'
        }
    },
    SkillID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Enable: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 1
    }
}, {
    sequelize: db,
    tableName: '_CharSkill',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__CharSkill",
            unique: true,
            fields: [
                { name: "CharID" },
                { name: "SkillID" },
            ]
        },
    ]
});
