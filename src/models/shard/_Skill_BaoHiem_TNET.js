import { fn } from 'sequelize';
export default (db, types) => db.define('_Skill_BaoHiem_TNET', {
    CharID: {
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    CharName: {
        type: types.STRING(20),
        allowNull: true
    },
    SkillBaoHiem: {
        type: types.INTEGER,
        allowNull: true
    },
    Regdate: {
        type: types.DATE,
        allowNull: true,
        defaultValue: fn('getdate')
    },
    LastModified: {
        type: types.DATE,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_Skill_BaoHiem_TNET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__Skill_BaoHiem_TNET",
            unique: true,
            fields: [
                { name: "CharID" },
            ]
        },
    ]
});
