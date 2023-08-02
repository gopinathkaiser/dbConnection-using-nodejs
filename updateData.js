const { connection } = require('./DatabaseConnection');

async function update() {
    const [sid, sname] = process.argv.slice(2);
    try {
        await connection.query("UPDATE student set sname = $1 where sid = $2", [sname, sid]);

    } catch (error) {
        console.error(error);
    }
}

update();
connection.end();