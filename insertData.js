const { connection } = require('./DatabaseConnection');


async function insert() {
   
    const [sid, sname, sage] = process.argv.slice(2);
    try {
        await connection.query("INSERT INTO student (sid,sname,sage) VALUES ($1, $2, $3)", [sid, sname, sage]);
    
    } catch (error) {
        console.log("duplicate");
    }

}

insert();
connection.end();