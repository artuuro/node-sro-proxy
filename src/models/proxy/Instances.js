const Instances = (db, types) => db.define('Instances', {
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
    username: {
        type: types.STRING,
        allowNUll: false
    },
    connected: {
        type: types.BOOLEAN,
        allowNull: false,
        default: false
    },
    is_bot: {
        type: types.BOOLEAN,
        allowNull: false,
        default: false
    },
    createdAt: types.DATE,
    updatedAt: types.DATE
});

export default Instances;