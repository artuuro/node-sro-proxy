const Blacklist = (db, types) => db.define('Blacklist', {
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
    reason: {
        type: types.STRING,
        default: 'System Restricted'
    },
    createdAt: types.DATE,
    updatedAt: types.DATE
});

export default Blacklist;