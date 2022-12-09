const mysql = require('mysql');
const excel = require('exceljs');

//CREATE A CONNECTION TO THE DATABASE 

const con = mysql.createConnection({
    host: '198.71.60.136',
    user: 'asilveiro',
    password: 'NvBhnVzS5',
    database: 'AVL_ST'
});

//OPENING THE MYSQL CONNECTION 
/*
con.connect((err) => {
    if(err) throw err;
    console.log("ERROR CONNECTING TO DB!!!");
})*/

con.connect((err) => {
    if(err){
        console.log("ERROR CONNECTING TO DB!!!");
        return;
    }
    console.log("CONNECTION ESTABLISHED!!!");
});

con.end((err) => {
    //The connection is terminated gracefully
    //Ensures all remaining queries are executed
    //Then sends a quit packet to the MySQL server
});

/*
con.query('SELECT * FROM dat_Unidad WHERE n_estatus_id = 1 AND b_unidad_unigis = 1', (err, rows) =>{
    //if(err) throw err;
    console.log('Data received from DB: ');
    console.log(rows);
});*/

var sql = "SELECT c_unidad_nombre FROM dat_Unidad WHERE n_status_id = 1 AND b_unidad_unigis = 1";
con.query(sql, function (err, result) {
  console.log(result);
});