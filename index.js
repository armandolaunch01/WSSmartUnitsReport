const mysql = require('mysql');

const excel = require('exceljs');
//CREATE A CONNECTION TO DB 
const con = mysql.createConnection({
    host: '198.71.60.136',
    user: 'asilveiro',
    password: 'NvBhnVzS5',
    database: 'AVL_ST'
});

con.connect((err) => {
    if(err){
        console.log("ERROR CONNECTING TO DB!!!");
        return;
    }
    console.log("CONNECTION ESTABLISHED!!!");
});

/*var qry= "SELECT C.c_cliente_nombre, F.c_flotilla_nombre U.c_unidad_nombre  FROM dat_Unidad U, dat_Cliente C, dat_Flotilla F, rel_UnidadFlotilla UF WHERE U.n_estatus_id = 1 AND C.n_estatus_id = 1 AND F.n_flotilla_id AND AND UF.n_estatus_id U.b_unidad_altotrack = 1 AND C.n_cliente_id = U.n_cliente_id AND C.n_cliente_id = F.n_cliente_id AND UF.n_unidad_id = U.n_unidad_id  AND UF.n_flotilla_id = F.n_flotilla_id";*/

var qry= 'SELECT DISTINCT C.c_cliente_nombre, F.c_flotilla_nombre, U.c_unidad_nombre, CONCAT("Altotrack") AS "WS" FROM dat_Unidad U, dat_Cliente C, dat_Flotilla F, rel_UnidadFlotilla UF WHERE U.n_estatus_id = 1  AND C.n_estatus_id = 1  AND F.n_estatus_id =1 AND UF.n_estatus_id = 1 AND b_unidad_altotrack = 1  AND C.n_cliente_id = U.n_cliente_id  AND C.n_cliente_id = F.n_cliente_id AND UF.n_unidad_id = U.n_unidad_id  AND UF.n_flotilla_id = F.n_flotilla_id';

/*var qry = "SELECT DISTINCT C.c_cliente_nombre, U.c_unidad_nombre FROM dat_Unidad U, dat_Cliente C WHERE C.n_cliente_id = U.n_cliente_id AND U.n_estatus_id = 1 AND U.b_unidad_dhl = 1";*/
con.query(qry, (err, result) => {
    console.log(result)
});

con.end((err) => {
    //The connection is terminated gracefully
    //Ensures all remaining queries are executed
    //Then sends a quit packet to the MySQL server
    console.log("CONNECTION HAS BEEN CLOSED!!!!");
});