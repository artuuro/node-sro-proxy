import { fn } from 'sequelize';
export default (db, types) => db.define('tb_paygate_trans', {
    trans_ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    trans_date: {
        type: types.DATE,
        allowNull: true,
        defaultValue: fn('getdate')
    },
    trans_type: {
        type: types.STRING(25),
        allowNull: true
    },
    bank_id: {
        type: types.STRING(15),
        allowNull: true
    },
    account_id: {
        type: types.STRING(15),
        allowNull: true
    },
    order_no: {
        type: types.STRING(25),
        allowNull: true
    },
    moneyValue: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    beforeMoney: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    afterMoney: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    PG_TransID: {
        type: types.BIGINT,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'tb_paygate_trans',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
        {
            name: "PK_tb_paygate_trans",
            unique: true,
            fields: [
                { name: "trans_ID" },
            ]
        },
    ]
});
