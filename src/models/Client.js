const Client = (i, t) => i.define('client', {
  id: {
    type: t.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hwid: {
    type: t.STRING,
    allowNull: false
  },
  createdAt: t.DATE,
  updatedAt: t.DATE
}, {

});

export default Client;