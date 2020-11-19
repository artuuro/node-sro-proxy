export default (db, types) => db.define('_RefGachaItemSet', {
    Service: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    Set_ID: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    RefItemID: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    Ratio: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 0
    },
    Count: {
        type: types.SMALLINT,
        allowNull: false,
        defaultValue: 1
    },
    GachaID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    Visible: {
        type: types.TINYINT,
        allowNull: false,
        defaultValue: 0
    },
    param1: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    param1_Desc128: {
        type: types.STRING(129),
        allowNull: false,
        defaultValue: "xxx"
    },
    param2: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    param2_Desc128: {
        type: types.STRING(129),
        allowNull: false,
        defaultValue: "xxx"
    },
    param3: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    param3_Desc128: {
        type: types.STRING(129),
        allowNull: false,
        defaultValue: "xxx"
    },
    param4: {
        type: types.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    param4_Desc128: {
        type: types.STRING(129),
        allowNull: false,
        defaultValue: "xxx"
    }
}, {
    sequelize: db,
    tableName: '_RefGachaItemSet',
    schema: 'dbo',
    timestamps: false
});
