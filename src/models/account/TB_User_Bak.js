export default (db, types) => db.define('TB_User_Bak', {
    JID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    StrUserID: {
        type: types.STRING(25),
        allowNull: false
    },
    password: {
        type: types.STRING(50),
        allowNull: false
    },
    question: {
        type: types.STRING(70),
        allowNull: true
    },
    answer: {
        type: types.STRING(50),
        allowNull: true
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
    cid: {
        type: types.STRING(70),
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
        allowNull: false
    },
    sec_content: {
        type: types.TINYINT,
        allowNull: false
    },
    Birthday: {
        type: "SMALLDATETIME",
        allowNull: true
    },
    Province: {
        type: types.STRING(50),
        allowNull: true
    },
    District: {
        type: types.STRING(50),
        allowNull: true
    },
    WherePlay: {
        type: types.STRING(50),
        allowNull: true
    },
    WhereKnow: {
        type: types.STRING(50),
        allowNull: true
    },
    Reference: {
        type: types.STRING(50),
        allowNull: true
    },
    Games: {
        type: types.STRING(50),
        allowNull: true
    },
    strLevel: {
        type: types.STRING(10),
        allowNull: true
    },
    Class: {
        type: types.STRING(50),
        allowNull: true
    },
    HowPlay: {
        type: types.TINYINT,
        allowNull: true
    },
    AccPlayTime: {
        type: types.INTEGER,
        allowNull: false
    },
    LatestUpdateTime_ToPlayTime: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'TB_User_Bak',
    schema: 'dbo',
    timestamps: false
});
