const { connection } = require('./DatabaseConnection');

async function display() {

    try {
        const resultData = await connection.query("select * from student");
        console.log(resultData.rows);
    } catch (error) {
        console.error(error);
    }
}

display();
connection.end();