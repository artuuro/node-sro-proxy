export default (db, types) => db.define('_ItemQuotation', {
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Service: {
        type: types.INTEGER,
        allowNull: false
    },
    AssocNPC: {
        type: types.INTEGER,
        allowNull: false
    },
    RefItemID: {
        type: types.INTEGER,
        allowNull: false
    },
    BaseQuot: {
        type: types.REAL,
        allowNull: false
    },
    Quot_LB: {
        type: types.REAL,
        allowNull: false
    },
    Quot_UB: {
        type: types.REAL,
        allowNull: false
    },
    BaseStockAmount: {
        type: types.INTEGER,
        allowNull: false
    },
    FluctuateAmount: {
        type: types.INTEGER,
        allowNull: false
    },
    CurStockAmount: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_ItemQuotation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__ItemQuotation",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
