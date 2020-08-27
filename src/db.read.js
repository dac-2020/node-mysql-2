const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");

/**
 * Real All User
 */
let readAllUser = async () => {
  const connection = mysql.createConnection(config.DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM USER";
  let results = await connection.queryAsync(sql);

  await connection.endAsync();
  return results;
};

/**
 * Read All By Query
 */
let readUserByQuery = async () => {
  const connection = mysql.createConnection(config.DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE ID=? AND EMAIL=? ";
  let results = await connection.queryAsync(sql, [1, "onkar@gmail.com"]);

  await connection.endAsync();
  return results;
};

/**
 * @param {*} id
 * @param {*} email
 */
let readUserByQueryParams = async (id, email) => {
  const connection = mysql.createConnection(config.DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE ID=? AND EMAIL=? ";
  let results = await connection.queryAsync(sql, [id, email]);

  await connection.endAsync();
  return results;
};

/**
 *
 * @param {*} user
 */
let readUserByQueryJsonParam = async (user) => {
  const connection = mysql.createConnection(config.DB_CONFIG);

  await connection.connectAsync();

  let sql = "SELECT * FROM USER WHERE ID=? AND EMAIL=? ";
  let results = await connection.queryAsync(sql, [user.id, user.email]);

  await connection.endAsync();
  return results;
};

module.exports = {
  readAllUser,
  readUserByQuery,
  readUserByQueryParams,
  readUserByQueryJsonParam,
};
