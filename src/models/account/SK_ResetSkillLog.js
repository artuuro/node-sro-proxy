export default (db, types) => db.define('SK_ResetSkillLog', {
    id: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    JID: {
        type: types.INTEGER,
        allowNull: true
    },
    struserid: {
        type: types.STRING(20),
        allowNull: true
    },
    charname: {
        type: types.STRING(20),
        allowNull: true
    },
    SkillDown: {
        type: types.STRING(20),
        allowNull: true
    },
    NewSkill: {
        type: types.STRING(50),
        allowNull: true
    },
    SilkDown: {
        type: types.STRING(20),
        allowNull: true
    },
    server: {
        type: types.STRING(20),
        allowNull: true
    },
    TimeReset: {
        type: types.DATE,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'SK_ResetSkillLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK_SK_ResetSkillLog",
            unique: true,
            fields: [
                { name: "id" },
            ]
        },
    ]
});
