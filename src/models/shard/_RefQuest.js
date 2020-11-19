export default (db, types) => db.define('_RefQuest', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    CodeName: {
        type: types.STRING(128),
        allowNull: false
    },
    Level: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    DescName: {
        type: types.STRING(128),
        allowNull: false
    },
    NameString: {
        type: types.STRING(128),
        allowNull: false
    },
    PayString: {
        type: types.STRING(128),
        allowNull: false
    },
    ContentsString: {
        type: types.STRING(128),
        allowNull: false
    },
    PayContents: {
        type: types.STRING(128),
        allowNull: false
    },
    NoticeNPC: {
        type: types.STRING(128),
        allowNull: false,
        defaultValue: ""
    },
    NoticeCondition: {
        type: types.STRING(128),
        allowNull: false,
        defaultValue: ""
    }
}, {
    sequelize: db,
    tableName: '_RefQuest',
    schema: 'dbo',
    timestamps: false
});
