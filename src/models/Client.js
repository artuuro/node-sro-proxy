const Client = (db, types) => db.define('Client', {
    id: {
        type: types.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ip: {
        type: types.STRING,
        allowNull: false
    },
    hwid: {
        type: types.STRING,
        allowNull: false
    },
    userId: {
        type: types.INTEGER,
        allowNUll: true
    },
    createdAt: types.DATE,
    updatedAt: types.DATE
});

export default Client;