export default (db, types) => db.define('_OpenMarket', {
    JID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_AccountJID',
            key: 'JID'
        }
    },
    PersnalID: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: -1
    },
    CharName16: {
        type: types.STRING(64),
        allowNull: false
    },
    Status: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    RefItemID: {
        type: types.INTEGER,
        allowNull: false
    },
    TidGroupID: {
        type: types.INTEGER,
        allowNull: false
    },
    ItemClass: {
        type: types.INTEGER,
        allowNull: false
    },
    ItemID: {
        type: types.BIGINT,
        allowNull: false,
        references: {
            model: '_Items',
            key: 'ID64'
        }
    },
    SellCnt: {
        type: types.INTEGER,
        allowNull: false
    },
    RegDate: {
        type: "SMALLDATETIME",
        allowNull: false
    },
    EndDate: {
        type: "SMALLDATETIME",
        allowNull: false
    },
    Price: {
        type: types.BIGINT,
        allowNull: false
    },
    Deposit: {
        type: types.BIGINT,
        allowNull: false
    },
    SellFee: {
        type: types.BIGINT,
        allowNull: false
    },
    UseCash: {
        type: types.INTEGER,
        allowNull: false
    },
    Serial64: {
        type: types.BIGINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_OpenMarket',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__OpenMarket_For_SMC",
            fields: [
                { name: "Status" },
                { name: "TidGroupID" },
                { name: "ItemClass" },
                { name: "RegDate" },
            ]
        },
        {
            name: "IX__OpenMarket_JID_STATUS",
            fields: [
                { name: "JID" },
                { name: "Status" },
            ]
        },
        {
            name: "IX__OpenMarket_RefItemID",
            fields: [
                { name: "JID" },
            ]
        },
        {
            name: "IX__OpenMarket_TID_STATUS_REGDATE",
            fields: [
                { name: "TidGroupID" },
                { name: "Status" },
                { name: "EndDate" },
            ]
        },
    ]
});
