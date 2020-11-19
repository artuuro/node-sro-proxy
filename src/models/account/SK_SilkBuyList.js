export default (db, types) => db.define('SK_SilkBuyList', {
    BuyNo: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    UserJID: {
        type: types.INTEGER,
        allowNull: false
    },
    Silk_Type: {
        type: types.TINYINT,
        allowNull: false
    },
    Silk_Reason: {
        type: types.TINYINT,
        allowNull: false
    },
    Silk_Offset: {
        type: types.INTEGER,
        allowNull: false
    },
    Silk_Remain: {
        type: types.INTEGER,
        allowNull: false
    },
    ID: {
        type: types.INTEGER,
        allowNull: false
    },
    BuyQuantity: {
        type: types.INTEGER,
        allowNull: false
    },
    OrderNumber: {
        type: types.STRING(30),
        allowNull: false
    },
    PGCompany: {
        type: types.TINYINT,
        allowNull: true
    },
    PayMethod: {
        type: types.TINYINT,
        allowNull: true
    },
    PGUniqueNo: {
        type: types.STRING(20),
        allowNull: true
    },
    AuthNumber: {
        type: types.STRING(14),
        allowNull: true
    },
    AuthDate: {
        type: types.DATE,
        allowNull: true
    },
    SubJID: {
        type: types.INTEGER,
        allowNull: true
    },
    srID: {
        type: types.STRING(25),
        allowNull: true
    },
    SlipPaper: {
        type: types.STRING(128),
        allowNull: false
    },
    MngID: {
        type: types.INTEGER,
        allowNull: true
    },
    IP: {
        type: types.STRING(16),
        allowNull: true
    },
    RegDate: {
        type: types.DATE,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'SK_SilkBuyList',
    schema: 'dbo',
    timestamps: false
});
