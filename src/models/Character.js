const Character = (i, t) => i.define('character', {
    id: {
        type: t.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    charname: {
        type: t.STRING,
        allowNull: false
    },
    createdAt: t.DATE,
    updatedAt: t.DATE
});

export default Character;