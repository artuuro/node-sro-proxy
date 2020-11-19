export default (db, types) => db.define('TB_User', {
    JID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    StrUserID: {
        type: types.STRING(25),
        allowNull: false
    },
    password: {
        type: types.STRING(50),
        allowNull: false
    },
    Status: {
        type: types.TINYINT,
        allowNull: true
    },
    GMrank: {
        type: types.TINYINT,
        allowNull: true
    },
    Name: {
        type: types.STRING(50),
        allowNull: true
    },
    Email: {
        type: types.STRING(50),
        allowNull: true
    },
    sex: {
        type: types.CHAR(2),
        allowNull: true
    },
    certificate_num: {
        type: types.STRING(30),
        allowNull: true
    },
    address: {
        type: types.STRING(100),
        allowNull: true
    },
    postcode: {
        type: types.STRING(10),
        allowNull: true
    },
    phone: {
        type: types.STRING(20),
        allowNull: true
    },
    mobile: {
        type: types.STRING(20),
        allowNull: true
    },
    regtime: {
        type: types.DATE,
        allowNull: true
    },
    reg_ip: {
        type: types.STRING(25),
        allowNull: true
    },
    Time_log: {
        type: types.DATE,
        allowNull: true
    },
    freetime: {
        type: types.INTEGER,
        allowNull: true
    },
    sec_primary: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 3
    },
    sec_content: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 3
    },
    AccPlayTime: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    LatestUpdateTime_ToPlayTime: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Play123Time: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize: db,
    tableName: 'TB_User',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK_TB_User",
            unique: true,
            fields: [
                { name: "JID" },
            ]
        },
    ]
});
