export default (db, types) => db.define('_RefAlchemyMerit', {
    Service: {
        type: types.INTEGER,
        allowNull: false
    },
    Group: {
        type: types.TINYINT,
        allowNull: false
    },
    OptName128: {
        type: types.STRING(129),
        allowNull: false
    },
    Level: {
        type: types.TINYINT,
        allowNull: false
    },
    Weapon: {
        type: types.REAL,
        allowNull: false
    },
    Armor: {
        type: types.REAL,
        allowNull: false
    },
    Accessory: {
        type: types.REAL,
        allowNull: false
    },
    Shield: {
        type: types.REAL,
        allowNull: false
    },
    FreeParam1: {
        type: types.BIGINT,
        allowNull: true
    },
    FreeParamDesc1: {
        type: types.STRING(129),
        allowNull: true
    },
    FreeParam2: {
        type: types.BIGINT,
        allowNull: true
    },
    FreeParamDesc2: {
        type: types.STRING(129),
        allowNull: true
    },
    FreeParam3: {
        type: types.BIGINT,
        allowNull: true
    },
    FreeParamDesc3: {
        type: types.STRING(129),
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_RefAlchemyMerit',
    schema: 'dbo',
    timestamps: false
});
