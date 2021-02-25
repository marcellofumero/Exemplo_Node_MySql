async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;
 
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:@localhost/crud");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM cliente;');
    return rows;
}

async function insertCustomer(customer){
    const conn = await connect();
    const sql = 'INSERT INTO cliente(nome,bairro) VALUES (?,?);';
    const values = [customer.nome, customer.bairro];
    return await conn.query(sql, values);
}

async function updateCustomer(id, customer){
    const conn = await connect();
    const sql = 'UPDATE cliente SET nome=?, bairro=? WHERE idCliente=?';
    const values = [customer.nome, customer.bairro, id];
    return await conn.query(sql, values);
}

async function deleteCustomer(id){
    const conn = await connect();
    const sql = 'DELETE FROM cliente where idCliente=?;';
    return await conn.query(sql, [id]);
}
 
module.exports = {selectCustomers, insertCustomer, updateCustomer, deleteCustomer}