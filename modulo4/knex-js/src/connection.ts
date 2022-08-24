import knex from "knex"

const connection = knex({
    client: "mysql",
    connection:{
        host:"35.226.146.116",
        port: 3306,
        user: "alves-rafael-sousa",
        password:"xNG3!8kfzdK3K0v?aOQL" ,
        database: "alves-rafael-sousa",
        multipleStatements: true
    }
})
 export default connection