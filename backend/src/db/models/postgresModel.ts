import { Client, QueryResult, QueryResultRow } from "pg";

const user = process.env.POSTGRES_USER;
const host = process.env.POSTGRES_HOST;
const password = process.env.POSTGRES_PW;
const database = process.env.POSTGRES_DATABASE;
const port = Number(process.env.POSTGRES_PORT);

const config = { user, host, database, port };
Object.assign(config, password ? { password } : {});

async function pgQuery<T extends QueryResultRow>(
  sql: string,
  args?: any[]
): Promise<QueryResult<T> | null> {
  const client = new Client(config);

  try {
    await client.connect();
    console.log("here");
    console.log("Connected to database:", client.database);
    const res = await client.query(sql, args);
    return res;
  } catch (err) {
    console.error("Error:", err);

    return null;
  } finally {
    await client.end();
  }
}

export default pgQuery;
