const Client = (i, t) => i.define('instances', {
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
    CharID: {
        type: t.INTEGER,
        allowNull: true
    },
    JID: {
        type: t.INTEGER,
        allowNUll: true
    },
    createdAt: t.DATE,
    updatedAt: t.DATE
});

export default Client;