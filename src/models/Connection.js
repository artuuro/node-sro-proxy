const Client = (i, t) => i.define('client', {
    id: {
        type: t.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ip: {
        type: t.STRING,
        allowNull: false
    },
    hwid: {
        type: t.STRING,
        allowNull: false
    },
    createdAt: t.DATE,
    updatedAt: t.DATE
});

export default Client;