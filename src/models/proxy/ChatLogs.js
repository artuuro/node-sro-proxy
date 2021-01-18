const ChatLogs = (db, types) => db.define('ChatLogs', {
    id: {
        type: types.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: types.STRING,
        allowNull: false
    },
    receiver: {
        type: types.STRING,
        allowNUll: true,
        default: null
    },
    type: {
        type: types.INTEGER,
        allowNull: false
    },
    message: {
        type: types.STRING,
        allowNull: false
    },
    createdAt: types.DATE,
    updatedAt: types.DATE
});

export default ChatLogs;