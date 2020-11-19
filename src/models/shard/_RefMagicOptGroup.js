export default (db, types) => db.define('_RefMagicOptGroup', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    LinkID: {
        type: types.INTEGER,
        allowNull: false,
        unique: "IX__RefMagicOptGroup"
    },
    MagicType: {
        type: types.TINYINT,
        allowNull: false,
        unique: "IX__RefMagicOptGroup"
    },
    CodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    MOptID: {
        type: types.INTEGER,
        allowNull: false,
        unique: "IX__RefMagicOptGroup"
    },
    MOptLevel: {
        type: types.TINYINT,
        allowNull: false
    },
    Value: {
        type: types.INTEGER,
        allowNull: false
    },
    Param1: {
        type: types.INTEGER,
        allowNull: false
    },
    Param1_Desc: {
        type: types.STRING(129),
        allowNull: false
    },
    Param2: {
        type: types.INTEGER,
        allowNull: false
    },
    Param2_Desc: {
        type: types.STRING(129),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefMagicOptGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefMagicOptGroup",
            unique: true,
            fields: [
                { name: "LinkID" },
                { name: "MagicType" },
                { name: "MOptID" },
            ]
        },
    ]
});
