export default (db, types) => db.define('SK_PackageItemSaleLog', {
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    JID: {
        type: types.INTEGER,
        allowNull: false
    },
    ShardID: {
        type: types.INTEGER,
        allowNull: false
    },
    CharID: {
        type: types.INTEGER,
        allowNull: false
    },
    PackageItemID: {
        type: types.INTEGER,
        allowNull: false
    },
    Silk_Own: {
        type: types.INTEGER,
        allowNull: false
    },
    Silk_Gift: {
        type: types.INTEGER,
        allowNull: false
    },
    Silk_Point: {
        type: types.INTEGER,
        allowNull: false
    },
    IP: {
        type: types.INTEGER,
        allowNull: true
    },
    RegDate: {
        type: "SMALLDATETIME",
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'SK_PackageItemSaleLog',
    schema: 'dbo',
    timestamps: false
});
