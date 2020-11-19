export default (db, types) => db.define('TB_Net2e', {
    JID: {
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
    SecondPassword: {
        type: types.STRING(50),
        allowNull: true
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
    MDK: {
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
    cidType: {
        type: types.INTEGER,
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
        type: types.DATE,
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
    Inviter: {
        type: types.STRING(25),
        allowNull: true
    },
    Sec_act: {
        type: types.STRING(50),
        allowNull: true
    },
    LastModification: {
        type: types.DATE,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'TB_Net2e',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK_TB_Net2e",
            unique: true,
            fields: [
                { name: "JID" },
            ]
        },
    ]
});
