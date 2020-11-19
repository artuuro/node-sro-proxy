export default (db, types) => db.define('_RefCharDefault_Quest', {
    Service: {
        type: types.TINYINT,
        allowNull: false
    },
    ID: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    Race: {
        type: types.TINYINT,
        allowNull: false
    },
    CodeName: {
        type: types.STRING(128),
        allowNull: false
    },
    RequiredLevel: {
        type: types.TINYINT,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: '_RefCharDefault_Quest',
    schema: 'dbo',
    timestamps: false
});
