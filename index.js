//const db = require("./db");

(async () => {
    const db = require("./db");
    console.log('Começou!');
 
    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({nome: "Marcello", bairro: "Ipanema"});
    console.log(result);

    console.log('UPDATE CLIENTES');
    const result2 = await db.updateCustomer(9, {nome: "Marcello Fumero", bairro: "Dom Bosco"});
    console.log(result2);

    console.log('DELETE FROM CLIENTES');
    const result3 = await db.deleteCustomer(10);
    console.log(result3);

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();