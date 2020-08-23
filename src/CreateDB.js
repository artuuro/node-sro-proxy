import { Database } from "@config/index";
import { MSSQL } from "@service/index";

const database = new MSSQL({
  debug: true,
  MSSQL: Database
});

(async () => {
  await database.connect();
  await database.sync();
  process.exit(0);
})();
