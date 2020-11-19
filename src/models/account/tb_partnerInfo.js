export default (db, types) => db.define('tb_partnerInfo', {
    partnerID: {
        type: types.STRING(10),
        allowNull: false,
        primaryKey: true
    },
    partnerName: {
        type: types.STRING(20),
        allowNull: true
    },
    partnerPass: {
        type: types.STRING(10),
        allowNull: true
    },
    balance: {
        type: types.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    udate: {
        type: types.DATE,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'tb_partnerInfo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK_tb_partnerInfo",
            unique: true,
            fields: [
                { name: "partnerID" },
            ]
        },
    ]
});
