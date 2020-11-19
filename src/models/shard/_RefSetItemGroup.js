export default (db, types) => db.define('_RefSetItemGroup', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: "IX__RefSetItemGroup"
    },
    CodeName128: {
        type: types.STRING(129),
        allowNull: false
    },
    ObjName128: {
        type: types.STRING(129),
        allowNull: false
    },
    NameStrID128: {
        type: types.STRING(129),
        allowNull: false
    },
    DescStrID128: {
        type: types.STRING(129),
        allowNull: false
    },
    SetEffectMask: {
        type: types.TINYINT,
        allowNull: false
    },
    SetMagicMask: {
        type: types.INTEGER,
        allowNull: false
    },
    '2SetMOptGroupID': {
        type: types.INTEGER,
        allowNull: false
    },
    '3SetMOptGroupID': {
        type: types.INTEGER,
        allowNull: false
    },
    '4SetMOptGroupID': {
        type: types.INTEGER,
        allowNull: false
    },
    '5SetMOptGroupID': {
        type: types.INTEGER,
        allowNull: false
    },
    '6SetMOptGroupID': {
        type: types.INTEGER,
        allowNull: false
    },
    '7SetMOptGroupID': {
        type: types.INTEGER,
        allowNull: false
    },
    '8SetMOptGroupID': {
        type: types.INTEGER,
        allowNull: false
    },
    '9SetMOptGroupID': {
        type: types.INTEGER,
        allowNull: false
    },
    '10SetMOptGroupID': {
        type: types.INTEGER,
        allowNull: false
    },
    '11SetMOptGroupID': {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefSetItemGroup',
    schema: 'dbo',
    timestamps: false,
    indexes: [
        {
            name: "IX__RefSetItemGroup",
            unique: true,
            fields: [
                { name: "ID" },
            ]
        },
    ]
});
