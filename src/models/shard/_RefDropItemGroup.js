export default (db, types) => db.define('_RefDropItemGroup', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    RefItemGroupID: {
        type: types.INTEGER,
        allowNull: false,
        unique: "IX__RefDropItemGroup"
    },
    CodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    RefItemID: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_RefObjCommon',
            key: 'ID'
        },
        unique: "IX__RefDropItemGroup"
    },
    SelectRatio: {
        type: types.REAL,
        allowNull: false
    },
    RefMagicGroupID: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefDropItemGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefDropItemGroup",
            unique: true,
            fields: [
                { name: "RefItemGroupID" },
                { name: "RefItemID" },
            ]
        },
    ]
});
