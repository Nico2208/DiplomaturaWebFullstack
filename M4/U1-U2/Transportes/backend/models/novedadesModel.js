var pool = require ('./db');

async function getNovedades() {
    var query = "select * from novedades order by id asc";
    var rows = await pool.query(query);
    return rows; 
}

module.exports = {getNovedades}