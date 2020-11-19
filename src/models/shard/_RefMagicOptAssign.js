export default (db, types) => db.define('_RefMagicOptAssign', {
    Service: {
        type: types.INTEGER,
        allowNull: false
    },
    Race: {
        type: types.TINYINT,
        allowNull: false
    },
    TID3: {
        type: types.TINYINT,
        allowNull: false
    },
    TID4: {
        type: types.TINYINT,
        allowNull: false
    },
    AvailMOpt1: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt2: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt3: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt4: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt5: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt6: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt7: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt8: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt9: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt10: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt11: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt12: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt13: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt14: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt15: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt16: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt17: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt18: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt19: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt20: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt21: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt22: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt23: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt24: {
        type: types.STRING(129),
        allowNull: false
    },
    AvailMOpt25: {
        type: types.STRING(129),
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefMagicOptAssign',
    schema: 'dbo',
    timestamps: false
});
