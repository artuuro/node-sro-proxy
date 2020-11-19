export default (db, types) => db.define('BOOKS', {
    id: {
        type: types.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: types.STRING(255),
        allowNull: false
    },
    pubdate: {
        type: types.DATE,
        allowNull: false
    },
    synopsis: {
        type: types.STRING(4000),
        allowNull: false
    },
    inprint: {
        type: types.BOOLEAN,
        allowNull: false
    },
    salesCount: {
        type: types.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'BOOKS',
    schema: 'dbo',
    timestamps: false
});
