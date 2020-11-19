export default (db, types) => db.define('_BindingOptionWithItem', {
    nItemDBID: {
        type: types.BIGINT,
        allowNull: false,
        primaryKey: true
    },
    bOptType: {
        type: types.TINYINT,
        allowNull: false,
        primaryKey: true
    },
    nSlot: {
        type: types.TINYINT,
        allowNull: false,
        primaryKey: true
    },
    nOptID: {
        type: types.INTEGER,
        allowNull: false
    },
    nOptLvl: {
        type: types.TINYINT,
        allowNull: false
    },
    nOptValue: {
        type: types.INTEGER,
        allowNull: false
    },
    nParam1: {
        type: types.INTEGER,
        allowNull: true
    },
    nParam2: {
        type: types.INTEGER,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_BindingOptionWithItem',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "PK__BindingOptionWithItem",
            unique: true,
            fields: [
                { name: "nItemDBID" },
                { name: "bOptType" },
                { name: "nSlot" },
            ]
        },
    ]
});
