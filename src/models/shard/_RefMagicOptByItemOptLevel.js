export default (db, types) => db.define('_RefMagicOptByItemOptLevel', {
    Link: {
        type: types.INTEGER,
        allowNull: false,
        references: {
            model: '_RefAbilityByItemOptLevel',
            key: 'ID'
        },
        unique: "IX__RefMagicOptByItemOptLevel"
    },
    RefMagicOptID: {
        type: types.SMALLINT,
        allowNull: false,
        references: {
            model: '_RefMagicOpt',
            key: 'ID'
        },
        unique: "IX__RefMagicOptByItemOptLevel"
    },
    MagicOptValue: {
        type: types.INTEGER,
        allowNull: false
    },
    TooltipType: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    TooltipCodename: {
        type: types.STRING(128),
        allowNull: false,
        defaultValue: "xxx"
    }
}, {
    sequelize: db,
    tableName: '_RefMagicOptByItemOptLevel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefMagicOptByItemOptLevel",
            unique: true,
            fields: [
                { name: "RefMagicOptID" },
                { name: "Link" },
            ]
        },
    ]
});
