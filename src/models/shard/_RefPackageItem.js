export default (db, types) => db.define('_RefPackageItem', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    Country: {
        type: types.INTEGER,
        allowNull: false
    },
    ID: {
        autoIncrement: true,
        type: types.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    CodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    SaleTag: {
        type: types.SMALLINT,
        allowNull: false
    },
    ExpandTerm: {
        type: types.STRING(65),
        allowNull: false
    },
    NameStrID: {
        type: types.STRING(129),
        allowNull: false
    },
    DescStrID: {
        type: types.STRING(129),
        allowNull: false
    },
    AssocFileIcon: {
        type: types.STRING(129),
        allowNull: false
    },
    Param1: {
        type: types.INTEGER,
        allowNull: false
    },
    Param1_Desc128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param2: {
        type: types.INTEGER,
        allowNull: false
    },
    Param2_Desc128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param3: {
        type: types.INTEGER,
        allowNull: false
    },
    Param3_Desc128: {
        type: types.STRING(129),
        allowNull: false
    },
    Param4: {
        type: types.INTEGER,
        allowNull: false
    },
    Param4_Desc128: {
        type: types.STRING(129),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefPackageItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__RefPackageItem",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
