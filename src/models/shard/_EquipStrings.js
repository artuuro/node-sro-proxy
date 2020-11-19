export default (db, types) => db.define('_EquipStrings', {
    '1': {
        type: types.STRING,
        allowNull: true
    },
    '2': {
        type: types.STRING,
        allowNull: true
    },
    '3': {
        type: types.STRING,
        allowNull: true
    },
    '4': {
        type: types.STRING,
        allowNull: true
    },
    '5': {
        type: types.STRING,
        allowNull: true
    },
    '6': {
        type: types.STRING,
        allowNull: true
    },
    '7': {
        type: types.STRING,
        allowNull: true
    },
    '8': {
        type: types.STRING,
        allowNull: true
    },
    '9': {
        type: types.STRING,
        allowNull: true
    },
    '10': {
        type: types.STRING,
        allowNull: true
    },
    '11': {
        type: types.STRING,
        allowNull: true
    },
    '12': {
        type: types.STRING,
        allowNull: true
    },
    '13': {
        type: types.STRING,
        allowNull: true
    },
    Service: {
        type: types.STRING,
        allowNull: true
    },
    TextString: {
        type: types.STRING,
        allowNull: true
    },
    EndTextString: {
        type: types.STRING,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: '_EquipStrings',
    schema: 'dbo',
    timestamps: false
});
