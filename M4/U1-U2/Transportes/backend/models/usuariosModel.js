var pool = require('./db');
var md5 = require('md5');

async function getUserByUsernameAndPassword(user, password) {  //Recibe como parametros el nombre de usuario y el password y devuelve la fila correspondiente como un objeto.
    try { //try/catch sirve para interceptar excepciones y que no lleguen al usuario
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        throw error;
    }
}

module.exports = {getUserByUsernameAndPassword};