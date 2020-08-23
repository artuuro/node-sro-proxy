const Account = (i, t) => i.define('account', {
  id: {
    type: t.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: t.STRING,
    allowNull: false
  },
  createdAt: t.DATE,
  updatedAt: t.DATE
}, {
  
});

export default Account;