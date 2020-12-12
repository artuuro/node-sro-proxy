const Blacklist = (db, types) => db.define('Blacklist', {
    id: {
        type: types.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    remote: {
        type: types.STRING,
        allowNull: false
    },
    reason: {
        type: types.STRING,
        default: 'Violated User Agreement'
    },
    active: {
        type: types.BOOLEAN,
        default: true
    },
    createdAt: types.DATE,
    updatedAt: types.DATE
});

export default Blacklist;