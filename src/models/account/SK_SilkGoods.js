export default (db, types) => db.define('SK_SilkGoods', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    GoodsCode: {
        type: types.STRING(10),
        allowNull: false
    },
    GoodsName: {
        type: types.STRING(32),
        allowNull: false
    },
    SilkQuantity: {
        type: types.INTEGER,
        allowNull: false
    },
    PointQuantity: {
        type: types.INTEGER,
        allowNull: false
    },
    SilkPrice: {
        type: types.INTEGER,
        allowNull: false
    },
    Category: {
        type: types.TINYINT,
        allowNull: false
    },
    CPName: {
        type: types.STRING(36),
        allowNull: false
    },
    RegDate: {
        type: types.DATE,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'SK_SilkGoods',
    schema: 'dbo',
    timestamps: false
});
